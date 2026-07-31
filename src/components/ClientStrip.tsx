import React from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const clients = [
  {
    name: "Clinix AI",
    src: "/clients/clinix-ai.png",
    srcDark: "/clients/clinix-ai-dark.png",
    width: 216,
    height: 79,
    className: "h-8 w-auto sm:h-9",
  },
  {
    name: "Kalos Construction Group",
    src: "/clients/kalos.png",
    srcDark: "/clients/kalos-dark.png",
    width: 1024,
    height: 341,
    className: "h-7 w-auto sm:h-8",
  },
  {
    name: "Caesars Palace Las Vegas",
    src: "/clients/caesars-palace.png",
    width: 250,
    height: 200,
    className: "h-14 w-auto sm:h-16",
  },
  {
    name: "Atlanta Humane Society",
    src: "/clients/atlanta-humane-stacked.png",
    srcDark: "/clients/atlanta-humane-stacked-dark.png",
    width: 628,
    height: 475,
    className: "h-14 w-auto sm:h-16",
  },
  {
    name: "Henry Schein",
    src: "/clients/henry-schein.png",
    srcDark: "/clients/henry-schein-dark.png",
    width: 1024,
    height: 103,
    className: "h-6 w-auto sm:h-7",
  },
  {
    name: "Buckhead Business Association",
    src: "/clients/buckhead-business-association.png",
    width: 1024,
    height: 253,
    className: "h-8 w-auto sm:h-9",
  },
] as const;

export function ClientStrip() {
  return (
    <section className="py-12 bg-bg-surface/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Eyebrow className="justify-center">
            Trusted Production Partner For Notable Organizations & Leaders
          </Eyebrow>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-10 items-center justify-items-center">
          {clients.map((client) => {
            const hasDark = "srcDark" in client && client.srcDark;

            return (
              <div
                key={client.src}
                className="flex h-16 w-full max-w-[12rem] items-center justify-center opacity-80 transition-opacity hover:opacity-100"
              >
                {hasDark ? (
                  <>
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className={cn("object-contain dark:hidden", client.className)}
                    />
                    <Image
                      src={client.srcDark}
                      alt=""
                      aria-hidden
                      width={client.width}
                      height={client.height}
                      className={cn("hidden object-contain dark:block", client.className)}
                    />
                  </>
                ) : (
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className={cn("object-contain", client.className)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
