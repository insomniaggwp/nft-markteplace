import { useEffect, useState } from "react";
import { fetchCampaigns } from "../services/api";
import CardContent from "../components/CardConten";

const DashboardPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  // const [loading, setLoading] = useState(true);
  console.log('campaigns', campaigns);

  useEffect(() => {
    getCampaigns();
  }, [])

  const getCampaigns = async () => {
    try {
      const res = await fetchCampaigns();
      setCampaigns(res);
    } catch (error) {
      alert('Gagal mengambil campaign. Coba lagi nanti.');
      console.error(error);
    }
  }

  return (
    <div className="p-6">
      Dashboard
      <CardContent/>
    </div>
  );
};

export default DashboardPage;
