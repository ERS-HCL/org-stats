import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <div className="shadow-lg flex bg-white border rounded-lg p-6 leading-normal">
        <img
          className="h-24 w-24 mr-6"
          src="/org-stats/static/TO-white-stroke.png"
        />
        <div className="text-left">
          <h1 className="text-lg font-bold">HCL ERS Technology Office</h1>
          <h2 className="text-blue-700 font-semibold">Open Source Initiative</h2>
          <a className="text-gray-700 text-sm " href="https://github.com/ERS-HCL" target="_blank">https://github.com/ERS-HCL</a>
          <p className="text-gray-600 text-sm font-thin">Built with Next.js</p>
        </div>
      </div>
    </Layout>
  );
}
