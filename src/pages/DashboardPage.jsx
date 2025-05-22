import { useEffect } from "react";
import { fetchCampaigns, fetchTones } from "../services/api";

const DashboardPage = () => {

  useEffect(() => {
    fetchCampaigns();
    fetchTones();
  }, [])

  return (
    <div className="p-6">
      Dashboard
    </div>
  );
};

export default DashboardPage;
