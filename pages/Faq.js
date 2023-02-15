import BaseLayout from "@/components/Layout/BaseLayout";
import FaqLayout from "@/components/Layout/FaqLayout";
import Head from "next/head";

export default function Faq(){
    return(
        <>
            <Head>
                <title> SIC UNUD 2023 | Frequently Asked Questions </title>
            </Head>

            <BaseLayout>
                <FaqLayout />
            </BaseLayout>
        </>
    )
}