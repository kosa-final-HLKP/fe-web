"use client";
import { signin } from "@/services/user";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import { Router } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import useSWR from "swr";

type FormData = {
  email: string;
  password: string;
};
export default function LoginForm() {
  // const user = {
  //   Id: 78912,
  //   Customer: "Jason Sweet",
  //   Quantity: 1,
  //   Price: 18.0,
  // };
  // const { mutate } = useSWR("https://reqbin.com/echo/post/json");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await signin(data);
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("refresh_token", response.data.refreshToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      className="w-96 flex flex-col gap-4 max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="이메일" />
        </div>
        <TextInput
          {...register("email", { required: true })}
          type="email"
          required
        />
        {errors.email && <div>이메일을 입력해주세요</div>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput
          {...register("password", { required: true })}
          type="password"
          required
        />
        {errors.password && <div>비밀번호를 입력해주세요</div>}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">아이디 저장</Label>
      </div>
      <Button className="bg-[#FDBD02] focus:bg-[#fda502]" type="submit">
        로그인
      </Button>
    </form>
  );
}
