import { useState, useEffect } from "react";
import useInput from "../hooks/useInput";
import DatePicker from "../components/DatePicker";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import ImageUploadForm from "../components/ImageUploadForm";
import Button from "../components/Button";
import { fetchTones } from "../services/api";

const CreateContentPage = () => {
  const [brandName, onBrandChange] = useInput("");
  const [campaignName, onCampaignName] = useInput("");
  const [campaignDesc, onCampaignDesc] = useInput("");
  const [targetAudience, onChangeTargetAudience] = useInput("");
  const [postTopic, onChangePostTopic] = useInput("");

  const [date, setDate] = useState("");
  const [postToneOptions, setPostToneOptions] = useState([])
  const [postTone, setPostTone] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [previewLogo, setPreviewLogo] = useState(null);

  useEffect(() => {
    getTones();
  }, []);

  const getTones = async () => {
    try {
      const res = await fetchTones();
      setPostToneOptions(res);
    } catch (error) {
      alert(error.message);
    }
  }

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleGenerateContent = (e) => {
    e.preventDefault()
    console.log('brandName', brandName);
    console.log('campaignName', campaignName);
    console.log('campaignDesc', campaignDesc);
    console.log('targetAudience', targetAudience);
    console.log('postTopic', postTopic);
    console.log('date', date);
    console.log('postTone', postTone);
    console.log('companyLogo', companyLogo);
  }

  const onChangePostTone = (e) => {
    setPostTone(e.target.value);
  }

  const handleChangeLogo = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCompanyLogo(file);
      setPreviewLogo(URL.createObjectURL(file));
    } else {
      setCompanyLogo(null);
      setPreviewLogo(null);
    }
  };

  return (
    <div className="p-6 flex">
      {/* form create content */}
      <div className="flex-1">
        <form onSubmit={handleGenerateContent} className="bg-neutral p-6 rounded shadow-elevation-3 w-full">
          <h2 className="text-headline-size font-bold text-primary mb-4">Create Content Form</h2>
          <InputField
            label="Brand name"
            id="brandName"
            value={brandName}
            onChange={onBrandChange}
            placeholder="Enter your Brand name"
          />

          <InputField
            label="Campaign name"
            id="campaignName"
            value={campaignName}
            onChange={onCampaignName}
            placeholder="Enter your Campaign name"
          />

          <InputField
            label="Campaign description"
            id="campaignDesc"
            type="textarea"
            value={campaignDesc}
            onChange={onCampaignDesc}
            placeholder="Enter your Campaign description"
          />

          <DatePicker 
            label="Posting schedule"
            date={date}
            onChangeDate={onChangeDate}
          />

          <InputField
            label="Target Audience"
            id="targetAudience"
            value={targetAudience}
            onChange={onChangeTargetAudience}
            placeholder="Enter your Target Audience"
          />

          <InputField
            label="Post Topic"
            id="postTopic"
            value={postTopic}
            onChange={onChangePostTopic}
            placeholder="Enter your Post Topic"
          />

          <Dropdown
            label="Post Tones"
            selected={postTone}
            options={postToneOptions}
            onChangeSelected={onChangePostTone}
          />

          <ImageUploadForm
            label="Input Logo"
            preview={previewLogo}
            onChange={handleChangeLogo}
          />

          <div className="mt-5">
            <Button type="submit" variant="secondary" >Generate Content</Button>
          </div>
        </form>
      </div>

      {/* preview content */}
      <div className="flex-1">

      </div>
    </div>
  );
};

export default CreateContentPage;
