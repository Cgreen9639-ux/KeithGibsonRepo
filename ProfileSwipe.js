import React, { useState, useEffect } from 'react';
import Swipeable from 'react-swipy';
import { supabase } from '../supabaseClient';

export default function ProfilePage() {
  // Profile picture upload states
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // Profile swipe/music states
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);
  const [editableText, setEditableText] = useState('Swipe for view 1 / 80');
  const [isEditing, setIsEditing] = useState(false);
  const [audio, setAudio] = useState(null);

  // Fetch profiles from Supabase
  useEffect(() => {
    async function fetchProfiles() {
      const { data, error } = await supabase
        .from('profiles')
        .select('image_url, name, description, music_url');
      if (data) setProfiles(data);
    }
    fetchProfiles();
    return () => {
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [profiles]);

  // Handlers for profile picture upload
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

  // Handlers for swiping and music
  const handleAfterSwipe = () => {
    if (index < profiles.length - 1) {
      setIndex(index + 1);
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    }
  };

  const handleTextClick = () => setIsEditing(true);
  const handleTextChange = (e) => setEditableText(e.target.value);
  const handleTextBlur = () => setIsEditing(false);

  const handlePlayMusic = () => {
    if (profiles[index]?.music_url) {
      if (audio) {
        audio.pause();
      }
      const newAudio = new window.Audio(profiles[index].music_url);
      setAudio(newAudio);
      newAudio.play();
    } else {
      alert('No music available for this artist.');
    }
  };

  const currentProfile = profiles[index] || {};

  return (
    <div>
    # React App Port
    PORT=5500
    
    # Supabase Project URL
    REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
    
    # Supabase Public Anon Key
    REACT_APP_SUPABASE_ANON_KEY=your-anon-key
    
    # (Optional) Other global variables
    REACT_APP_API_BASE_URL=https://api.yourdomain.com
    REACT_APP_ENV=production     <h2>Add a Profile Picture</h2>
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

      <div style={{ width: '300px', margin: 'auto', marginTop: 40 }}>
        {profiles.length > 0 ? (
          <Swipeable onAfterSwipe={handleAfterSwipe}>
            <img
              src={currentProfile.image_url}
              alt={currentProfile.name || `Profile ${index + 1}`}
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </Swipeable>
        ) : (
          <div>Loading profiles...</div>
        )}
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h3>{currentProfile.name}</h3>
          <p>{currentProfile.description}</p>
          {isEditing ? (
            <input
              type="text"
              value={editableText}
              onChange={handleTextChange}
              onBlur={handleTextBlur}
              autoFocus
            />
          ) : (
            <span onClick={handleTextClick} style={{ cursor: 'pointer' }}>
              {editableText}
            </span>
          )}
        </div>
        <button
          onClick={handlePlayMusic}
          disabled={!currentProfile.music_url}
          style={{ marginTop: '10px' }}
        >
          {audio ? 'Playing...' : 'Play Music'}
        </button>
      </div>
    </div>
  );
}