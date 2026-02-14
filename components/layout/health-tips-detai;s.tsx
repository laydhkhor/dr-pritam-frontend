import { Activity } from "lucide-react";

const HealthTipDetails = () => (
    <div className="min-h-[70vh] flex items-center justify-center p-8 bg-gray-50">
      <div className="text-center max-w-lg bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Activity className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-emerald-950 mb-4">Medical Insights Detail</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Full content for this health insight is being synchronized with our medical database. 
          Please check back shortly for expert-verified analysis.
        </p>
        <button 
          onClick={() => window.history.back()}
          className="text-emerald-600 font-bold hover:underline"
        >
          Return to Articles
        </button>
      </div>
    </div>
  );

  export default HealthTipDetails;