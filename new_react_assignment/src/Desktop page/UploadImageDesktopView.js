import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './styles.css';

const UploadImageDesktopView = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArr = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			setSelectedFiles((prevImages) => prevImages.concat(filesArr));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) 
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			
			<Header/>
			
			
				<input type="file" id="file" multiple onChange={handleImageChange}/>
				
				
				<div className="result">{renderPhotos(selectedFiles)}</div>
			
			<Footer/>
			
		</div>
		
		

	
		
		
		
	);
};

export default UploadImageDesktopView;