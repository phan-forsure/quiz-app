"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRef, useState } from "react";

export default function TabsComponent() {
  const [name, setName] = useState<string | undefined>("");
  const [link, setLink] = useState<string | undefined>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Take a quiz</TabsTrigger>
          <TabsTrigger value="password">Create a quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Take a quiz!</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Enter quiz link</Label>
                <Input
                  ref={linkRef}
                  onInput={() => setLink(linkRef.current?.value)}
                  placeholder="http://friends-quiz/123"
                ></Input>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Join as</Label>
                <Input
                  ref={nameRef}
                  onInput={() => setName(nameRef.current?.value)}
                  placeholder="John Doe"
                ></Input>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href={link!}>Start quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Create a quiz for your friends!</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Quiz name</Label>
                <Input placeholder="My test"></Input>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="cursor-pointer">Start</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
