import { useEffect, useState } from "react";
import { fetchCampaigns, fetchDeleteCampaign } from "../services/api";
import CardContent from "../components/CardConten";

const DashboardPage = () => {
  const [campaigns, setCampaigns] = useState([]);

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

  const onEditContent = (id) => {
    console.log('edit', id)
  }

  const onDeleteContent = async (id) => {
    if (window.confirm('Yakin ingin menghapus campaign ini?')) {
      try {
        await fetchDeleteCampaign(id);
        alert('Delete Campaign Success');
        getCampaigns();
      } catch {
        alert('Delete Campaign Failed');
      }
    };
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
              key={campaign.id}
              brand={campaign.brand}
              campaignName={campaign.campaignName}
              caption={campaign.caption}
              status={campaign.status}
              onEditContent={() => onEditContent(campaign.id)}
              onDeleteContent={() => onDeleteContent(campaign.id)}
            />
          )
        }
      </div>
    </div>
  );
};

export default DashboardPage;
