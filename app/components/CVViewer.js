export default function PdfViewer() {
    return (
      <div className="flex justify-center items-center h-screen">
        <iframe
          src="public/AcademicCV.pdf"
          className="w-full h-full lg:w-3/4 lg:h-[90%] rounded-xl shadow-lg"
        />
      </div>
    );
  }