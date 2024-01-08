import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const BlogHeroGrid = () => {
  return (
    <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 md:grid-rows-5">
      <Card className="row-span-5 h-auto border hover:opacity-75 ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Programming
          </p>
          <h4 className="text-white font-medium text-large">
            How to get a job in Tech
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1704587422648-43f456047a72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
      <Card className="row-span-2 h-auto border hover:opacity-75">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Travel</p>
          <h4 className="text-white font-medium text-large">
            How to get a remote job as Developer?
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
      <Card className="row-span-3 h-auto border hover:opacity-75">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Engineering
          </p>
          <h4 className="text-white font-medium text-large">
            How to use Ai to your advantage
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
      <Card className="row-span-3 h-auto border hover:opacity-75">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Community
          </p>
          <h4 className="text-white font-medium text-large">
            Learn Something About Techno Club
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
      <Card
        isFooterBlurred
        className="row-span-2 h-auto border hover:opacity-75"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Events</p>
          <h4 className="text-white font-medium text-large">
            How to participate in our events?
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
    </div>
  );
};

export default BlogHeroGrid;

function BlogHeroCard() {
  return (
    <Card className=" h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          What to watch
        </p>
        <h4 className="text-white font-medium text-large">
          Stream the Acme event
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/card-example-4.jpeg"
      />
    </Card>
  );
}
