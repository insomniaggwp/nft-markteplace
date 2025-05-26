import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGetCampaigns, fetchDeleteCampaign } from "../services/campaignService";
import CardContent from "../components/CardConten";
import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
import Dropdown from "../components/Dropdown";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("");
  const [searchCampaignName, setSearchCampaignName] = useState("")
  
  const statusOptions = [
    {
      id: '',
      name: "All",
      description: "status",
    },
    {
      id: 'posted',
      name: "posted",
      description: "status",
    },
    {
      id: 'scheduled',
      name: "scheduled",
      description: "status",
    },
    {
      id: 'draft',
      name: "draft",
      description: "status",
    }
  ]

  useEffect(() => {
    getCampaigns({ filteredStatus, searchCampaignName });
  }, [filteredStatus, searchCampaignName])

  const getCampaigns = async ({ filteredStatus, searchCampaignName }) => {
    try {
      const res = await fetchGetCampaigns({ filteredStatus, searchCampaignName });
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

  const onSearch = (value) => {
    setSearchCampaignName(value);
  }

  const onChangeFilterStatus = (e) => {
    setFilteredStatus(e.target.value);
  }

  return (
    <div className="p-6 px-16">
      <div className="w-64 mb-4">
        <Button variant="secondary" onClick={() => navigate('/content')}>
          Create Content
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-3">
          <SearchInput onSearch={onSearch} />
        </div>
        <div className="flex-1">
          <Dropdown
            selected={filteredStatus}
            options={statusOptions}
            onChangeSelected={onChangeFilterStatus}
            required
          />
        </div>
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
