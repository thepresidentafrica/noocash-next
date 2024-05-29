'use client'
import { cn } from "@/components/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IKeyFeatures } from "./KeyFeatures.dto";
import Image from "next/image";
export const KeyFeaturesCard = ({
    items,
    className,
}: {
    items: IKeyFeatures[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-4 2xl:max-w-screen-2xl  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                    href={item?.link ?? ''}
                    key={item?.link}
                    className="relative group fex justify-center items-center   block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className="bg-purple-700 flex justify-center flex-col items-center text-white dark:bg-slate-800">
                        <div className="center w-full flex flex-col  items-center justify-ce">
                            <Image className="h-16 w-16 flex items-center justify-center" src={item.icon} alt={item.title} height={100} width={100} />
                            <CardTitle >{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </div>

                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h4 className={cn("text-white text-xl font-bold tracking-wide mt-2", className)}>
                {children}
            </h4>
        </div>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "sm-8 text-white tracking-wide leading-relaxed 2xl:text-lg",
                className
            )}
        >
            {children}
        </p>
    );
};
