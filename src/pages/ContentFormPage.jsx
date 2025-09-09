import { useState, useEffect } from 'react';
import useInput from '../hooks/useInput';
import DatePicker from '../components/DatePicker';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import ImageUploadForm from '../components/ImageUploadForm';
import Button from '../components/Button';
import ContentEditor from '../components/ContentEditor';
import {
  fetchTones,
  fetchPostCampaign,
  fetchCampaignDetail,
  fetchPutCampaign,
} from '../services/campaignService';
import { generateContent } from '../services/openAiService';
import { useParams } from 'react-router-dom';

const ContentFormPage = () => {
  const [brandName, onBrandChange, setBrand] = useInput('');
  const [campaignName, onCampaignName, setCampaignName] = useInput('');
  const [campaignDesc, onCampaignDesc, setCampaignDesc] = useInput('');
  const [targetAudience, onChangeTargetAudience, setTarget] = useInput('');
  const [postTopic, onChangePostTopic, setTopic] = useInput('');

  const [date, setDate] = useState('');
  const [postToneOptions, setPostToneOptions] = useState([]);
  const [postTone, setPostTone] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [previewLogo, setPreviewLogo] = useState(null);
  const [generateCaption, setGenerateCaption] = useState(null);
  const [generateImage, setGenerateImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getTones();
  }, []);

  useEffect(() => {
    if (id) {
      getCampaignDetail();
    }
  }, [id]);

  const getCampaignDetail = async () => {
    try {
      const campaign = await fetchCampaignDetail(id);
      if (campaign) {
        setBrand(campaign.brand);
        setCampaignName(campaign.campaignName);
        setGenerateCaption(campaign.caption);
        setCampaignDesc(campaign.description);
        setGenerateImage(campaign.image);
        setCompanyLogo(campaign.logo);
        setDate(campaign.schedule);
        setTarget(campaign.target);
        setPostTone(campaign.tone);
        setTopic(campaign.topic);
      } else {
        throw new Error('Failed get Campaign Detail');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const getTones = async () => {
    try {
      const res = await fetchTones();
      setPostToneOptions(res);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleGenerateContent = async (e) => {
    e.preventDefault();

    const campaign = {
      brandName,
      campaignName,
      campaignDesc,
      targetAudience,
      postTopic,
      postTone,
    };

    try {
      const response = await generateContent(campaign);
      if (response) {
        setGenerateCaption(response.caption);
        setGenerateImage(response.image.url);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangePostTone = (e) => {
    setPostTone(e.target.value);
  };

  const handleChangeLogo = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setCompanyLogo(file);
      setPreviewLogo(URL.createObjectURL(file));
    } else {
      setCompanyLogo(null);
      setPreviewLogo(null);
    }
  };

  const handleSubmitCampaign = async () => {
    const body = {
      brand: brandName,
      campaignName,
      description: campaignDesc,
      schedule: date,
      target: targetAudience,
      topic: postTopic,
      tone: postTone,
      logo: `/assets/logos/${companyLogo.name}`,
      caption: generateCaption,
      image: generateImage,
      status: 'draft',
      postedAt: null,
    };

    try {
      const response = id
        ? await fetchPutCampaign({ id, body })
        : await fetchPostCampaign(body);

      console.log('response', response);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 flex gap-10">
      {/* form create content */}
      <div className="flex-1 w-full">
        <h2 className="text-subheadline-size font-bold text-primary mb-4">
          Create Content Form
        </h2>
        <form
          onSubmit={handleGenerateContent}
          className="bg-neutral p-6 rounded shadow-elevation-3 h-full"
        >
          <div
            id="input-form-container"
            className="flex flex-col justify-between h-full"
          >
            <div>
              <InputField
                label="Brand name"
                id="brandName"
                value={brandName}
                onChange={onBrandChange}
                placeholder="Enter your Brand name"
                required
              />

              <InputField
                label="Campaign name"
                id="campaignName"
                value={campaignName}
                onChange={onCampaignName}
                placeholder="Enter your Campaign name"
                required
              />

              <InputField
                label="Campaign description"
                id="campaignDesc"
                type="textarea"
                value={campaignDesc}
                onChange={onCampaignDesc}
                placeholder="Enter your Campaign description"
                required
              />

              <DatePicker
                label="Posting schedule"
                date={date}
                onChangeDate={onChangeDate}
                required
              />

              <InputField
                label="Target Audience"
                id="targetAudience"
                value={targetAudience}
                onChange={onChangeTargetAudience}
                placeholder="Enter your Target Audience"
                required
              />

              <InputField
                label="Post Topic"
                id="postTopic"
                value={postTopic}
                onChange={onChangePostTopic}
                placeholder="Enter your Post Topic"
                required
              />

              <Dropdown
                label="Post Tones"
                selected={postTone}
                options={postToneOptions}
                onChangeSelected={onChangePostTone}
                required
              />

              <ImageUploadForm
                label="Input Logo"
                preview={previewLogo}
                onChange={handleChangeLogo}
                required
              />
            </div>

            <div>
              <Button type="submit" variant="secondary">
                Generate Content
              </Button>
            </div>
          </div>
        </form>
      </div>

      {/* preview content */}
      <div className="flex-1 w-full">
        <h2 className="text-subheadline-size font-bold text-primary mb-4">
          Preview Content
        </h2>

        <div className="flex flex-col justify-between h-full p-6">
          <ContentEditor
            id="content-editor"
            className="flex-1"
            brand={brandName}
            logo={previewLogo}
            caption={generateCaption}
            image={generateImage}
          />

          <div>
            <Button onClick={handleSubmitCampaign}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFormPage;
