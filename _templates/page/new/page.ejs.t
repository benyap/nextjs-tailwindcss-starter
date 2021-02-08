---
to: src/pages/<%=name%>.tsx
---
<% if(data == "getStaticProps"){ -%>
import { GetStaticProps } from "next";
<% } -%>
<% if(data == "getStaticProps and getStaticPaths"){ -%>
import { GetStaticProps, GetStaticPaths } from "next";
<% } -%>
<% if(data == "getServerSideProps"){ -%>
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
<% } -%>

<% if(data.includes("getStaticProps")){ -%>
interface PageProps {}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {}
  }
}

<% } -%>
<% if(data.includes("getStaticPaths")){ -%>
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

<% } -%>
<% if(data == "getServerSideProps"){ -%>
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}

<% } -%>
<% if(data == "getServerSideProps"){ -%>
const Page = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
<% } else if (data !== "none") { -%>
const Page = ({}: PageProps) => {
<% } else { -%>
const Page = () => {
<% } -%>
  return null;
};

export default Page;
