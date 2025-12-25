"use client";
import Image from "next/image";

import { useState, useRef } from "react";

type FormData = {
    name: string;
    email: string;
    company: string;
    needs: string;
};


export default function Form(){

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        needs: "",
    });

    const [img, setImg] = useState("images/icons/icon-done.svg");
    const [errored, setErrored] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState("");

    const refs = {
        name: useRef<HTMLInputElement>(null),
        email: useRef<HTMLInputElement>(null),
        company: useRef<HTMLInputElement>(null),
        needs: useRef<HTMLTextAreaElement>(null),
    };


    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        if (errors[id as keyof FormData]) {
            const newErrors = { ...errors };
            delete newErrors[id as keyof FormData];
            setErrors(newErrors);
        }
    }


    function validate(data: FormData) {
        const newErrors: Partial<FormData> = {};
        if (!data.name.trim()) {
            newErrors.name = "Required field";
        }
        if (!data.email.trim()) {
            newErrors.email = "Required field";
        }
        else {
            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(data.email)) newErrors.email = "Invalid email";
        }
        if (!data.company.trim()) {
            newErrors.company = "Required field";
        }
        return newErrors;
    }

    function focusFirstError(errs: Partial<FormData>) {
        const order: (keyof FormData)[] = ["name", "email", "company", "needs"];
        for (const key of order) {
            if (errs[key]) {
                refs[key]?.current?.focus();
                break;
            }
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setServerError("");

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            focusFirstError(validationErrors);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.message || "Ошибка сервера");
            }

            setSuccess(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setServerError(err.message);
            } else {
                setServerError("Не удалось отправить форму");
            }
        } finally {
            setLoading(false);
        }
    }


    if (success) {
        return (
            <div
                className="flex flex-col justify-center max-w-[335px] w-full text-white py-10 px-3 rounded-3xl my-17 text-center md:max-w-[455px] md:my-25 xl:my-60"
                style={{background: "rgba(78, 206, 56, 0.1)", border: "1px solid #4ece38"}}
            >
                <Image
                    src={img}
                    width={19}
                    height={14}
                    alt="done"
                    className="self-center mb-3"
                    onError={() => {
                        if(!errored){
                            setImg('/images/no-icon.svg')
                            setErrored(true);
                        }
                    }}
                />
                <h2 className="text-xl text-white mb-2 xl:text-2xl xl:mb-5">Your application <br />has been submitted</h2>
                <p className="text-color-dop text-sm xl:text-lg">The manager will contact you soon</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 mt-10 mb-15 w-full max-w-[490px] m d:mt-15 md:mb-20">

            <div className="flex flex-col gap-2">
                <label className="text-white text-xs" htmlFor="name">Full Name*</label>
                <input
                    ref={refs.name}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-full bg-color-gray-dop border border-[#575757] text-color-dop h-[50px] transition hover:bg-[#575757] focus:bg-[#575757] ${
                        errors.name ? "ring-1  ring-[#FF6B6B]" : ""
                    }`}
                    type="text"
                    id="name"
                    placeholder="Joe Doe"
                    autoComplete="off"
                />
                {errors.name && <p className="text-[#FF6B6B] text-xs">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white text-xs" htmlFor="email">Email Address* </label>
                <input
                    ref={refs.email}
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-full bg-color-gray-dop border border-[#575757] text-color-dop h-[50px] transition hover:bg-[#575757] focus:bg-[#575757] ${
                        errors.email ? "ring-1 ring-[#FF6B6B]" : ""
                    }`}
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                    autoComplete="off"
                />
                {errors.email && <p className="text-[#FF6B6B] text-xs">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white text-xs" htmlFor="company-name">Company Name*  </label>
                <input
                    ref={refs.company}
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-full bg-color-gray-dop border border-[#575757] text-color-dop h-[50px] transition hover:bg-[#575757] focus:bg-[#575757] ${
                        errors.company ? "ring-1 ring-[#FF6B6B]" : ""
                    }`}
                    type="text"
                    id="company"
                    placeholder="Your Company Inc."
                    autoComplete="off"
                />
                {errors.company && (<p className="text-[#FF6B6B] text-xs">{errors.company}</p>)}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white text-xs" htmlFor="needs">Tell us about your needs</label>
                <textarea
                    ref={refs.needs}
                    value={formData.needs}
                    onChange={handleChange}
                    placeholder="I’m interested in learnning more about  tolqAi for..."
                    name="needs"
                    id="needs"
                    // cols="10"
                    // rows="10"
                    className="w-full py-1 px-4 rounded-full leading-5 bg-color-gray-dop border-1 border-[#575757] text-color-dop h-[50px] resize-none overflow-hidden md:leading-none md:py-4
                    transition hover:bg-[#575757] focus:bg-[#575757]
                    "
                ></textarea>
                {serverError && (<p className="text-[#FF6B6B] text-xs">{serverError}</p>)}

            </div>

            <button type="submit"
                    className="button-background-gradient text-white rounded-full py-3 mt-2"
                    disabled={loading}
            >
                {loading ? "Sending..." : "Send"}
            </button>
            <p className="text-color-second text-[11px] self-center text-center md:text-sm">By clicking the “Request Demo” button, you consent <br/> to the processing of your personal data</p>
        </form>
    )
}