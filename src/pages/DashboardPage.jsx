import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCampaigns, fetchDeleteCampaign } from "../services/campaignService";
import CardContent from "../components/CardConten";
import Button from "../components/Button";

const DashboardPage = () => {
  const navigate = useNavigate();
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
    navigate(`/content/${id}`)
  }

  const onDeleteContent = async (id) => {
    if (window.confirm('Are you sure ?')) {
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
    <div className="p-6 px-16">
      <div className="w-64 mb-4">
        <Button variant="secondary" onClick={() => navigate('/content')}>
          Create Content
        </Button>
      </div>

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
              image={campaign.image}
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
