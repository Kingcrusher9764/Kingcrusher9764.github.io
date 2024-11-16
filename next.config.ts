import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", /* it is used to create the static build of the file */
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
