import BaseLayout from "@/components/Layout/BaseLayout";
import DivisionsLayout from "@/components/Layout/DivisionsLayout";
import Head from "next/head";

export default function Divisions(){
    return(
        <>
            <Head>
                <title> SIC UNUD 2023 | Divisions </title>
            </Head>

            <BaseLayout>
                <DivisionsLayout />
            </BaseLayout>
        </>
    )
}