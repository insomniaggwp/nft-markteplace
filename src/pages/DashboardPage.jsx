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
      alert(error.message);
    }
  }

  return (
    <div className="p-6">
      Dashboard
      <div className="flex flex-wrap gap-8">
        {
          campaigns.map((campaign) =>
            <CardContent
              id={campaign.id}
              className="flex-1"
              brand={campaign.brand}
              campaignName={campaign.campaignName}
              caption={campaign.caption}
              status={campaign.status}
            />
          )
        }
      </div>
    </div>
  );
};

export default DashboardPage;
