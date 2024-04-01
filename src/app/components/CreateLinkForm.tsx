"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function CreateLinkForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mt-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Destination" />
        </div>
        <TextInput id="email1" type="email" placeholder="https://www.example.com/long-url" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Title" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember"> Create qr code too?</Label>
      </div>
      <Button outline gradientDuoTone="cyanToBlue">
        Create
      </Button>
    </form>
  );
}