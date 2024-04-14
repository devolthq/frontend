import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

interface Inputs {
    name: string;
    email: string;
    message: string;
}

export default function SupportSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await axios.post('/api/contact', data).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                throw error;
            });

            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Failed to send message!");
        }
    }

    return (
        <div className="px-10 mb-20" id="support">
            <div className="flex justify-center items-center">
                <h1 className=" text-3xl lg:text-4xl text-neutral-200 font-bold pb-6">Contact us</h1>
            </div>
            <Card className="max-w-screen-xl px-4 pb-4 flex mx-auto bg-[#080908] border-2 border-[#161d15]">
                <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-wrap md:flex-nowrap md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Your Full Name @ Company XYZ"
                            className="focus:outline-none w-full p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"
                            {...register("name", { required: true })}
                            value={"Marcelo @ Cryptum"}
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}

                        <input
                            type="text"
                            placeholder="Email"
                            className="focus:outline-none w-full p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"
                            {...register("email", { required: true })}
                            value={"marcelo.feitoza@sou.inteli.edu.br"}
                        />
                        {errors.email && <span className="text-red-500">This field is required, we need it to contact you back</span>}
                    </div>
                    <textarea
                        placeholder="Please type here the subject you wish to discuss with us..."
                        className=" focus:outline-none w-full h-56 md:h-44 p-2 mt-4 bg-[#0e0f0e] border border-[#161d15] rounded-md"
                        {...register("message", { required: true })}
                        value={"My message"}
                    />
                    {errors.message && <span className="text-red-500">This field is required</span>}

                    <Button className="mt-2 px-12" type="submit">Send</Button>
                </form>
            </Card>
        </div>
    );
}