export default function CV() {
  const pdfUrl = `/AcademicCV.pdf?v=${Date.now()}`;

  return (
    <div className="flex flex-col gap-14 pb-20 lg:mx-16">
      <h1 className="text-balance font-extrabold text-4xl ml-[23px]">
        Curriculum Vitae
      </h1>

      {/* Embedded PDF */}
      <div className="flex justify-center">
        <iframe
          src={pdfUrl}
          className="w-full h-[80vh] lg:w-3/4 rounded-xl shadow-lg border mx-auto"
          title="Curriculum Vitae"
        />
      </div>

      {/* Open in new tab */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="self-center p-4 rounded-lg hover:bg-zinc-200 hover:text-black bg-black text-lg font-semibold leading-7 text-white"
      >
        Open CV
      </a>
    </div>
  );
}
  