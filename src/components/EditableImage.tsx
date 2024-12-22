import React, { useState, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EditableImageProps {
  src: string;
  alt: string;
  imageKey: string;
  className?: string;
}

export const EditableImage = ({ src, alt, imageKey, className = "" }: EditableImageProps) => {
  const { isEditMode, saveChanges, getContent } = useEditable();
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const savedSrc = getContent(imageKey);
    if (savedSrc) {
      setCurrentSrc(savedSrc);
    }
  }, [imageKey]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const { url } = await response.json();
      setCurrentSrc(url);
      saveChanges(imageKey, url);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isEditMode) {
    return <img src={currentSrc} alt={alt} className={className} />;
  }

  return (
    <div className="relative group">
      <img src={currentSrc} alt={alt} className={className} />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 opacity-0 cursor-pointer"
          disabled={isUploading}
        />
        <Button disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Change Image'}
        </Button>
      </div>
    </div>
  );
};