import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from('profile-pictures')
      .upload(fileName, selectedFile);

    if (data) {
      const url = supabase.storage
        .from('profile-pictures')
        .getPublicUrl(fileName).data.publicUrl;
      setImageUrl(url);
    }
    setUploading(false);
  };

  return (
    <div>
      <h2>Add a Profile Picture</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Profile" style={{ width: 200, borderRadius: 12 }} />
        </div>
      )}
    </div>
  );
}