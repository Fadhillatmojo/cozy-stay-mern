import React, { Component } from 'react'
// parts
import IconSection from '../parts/IconSection'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import MostPicked from '../parts/MostPicked'
import Category from '../parts/Category'
import Testimonial from '../parts/Testimonial'

// fetch data
import fetchData from '../store/fetchData'

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			landingData: [],
		};
	}

	componentDidMount(){
		this.fetchLandingData();
	}

	fetchLandingData = async () => {
		try {
			// fetch data using fetch data file
			const result = await fetchData('landingPage');
			this.setState({landingData:result});
		} catch (error) {
			console.error('Error fetching landing data eror landingpage jsx:', error);
		}
	};

	render() {
		const mostPickedData = this.state.landingData.mostPicked;
		const categoriesData = this.state.landingData.categories;
		const testimonialData =this.state.landingData.testimonial;
		return (
			<>
			<Header />
			<Hero />
			<IconSection/>
			{mostPickedData && (
				<MostPicked dataMostPicked={mostPickedData} />
			)}
			{categoriesData && (
				<Category dataCategories={categoriesData} />
			)}
			{testimonialData && (
				<Testimonial dataTestimonial={testimonialData} />
			)}
			</>
		)
	}
}
