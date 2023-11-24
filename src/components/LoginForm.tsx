"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <form
      className="flex flex-col gap-4 max-w-sm"
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
      <Button className="bg-[#FDBD02]" type="submit">
        로그인
      </Button>
    </form>
  );
}
