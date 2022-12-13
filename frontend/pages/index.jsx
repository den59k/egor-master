import Layout from 'components/layout'
import Header from 'blocks/header'
import Features from 'blocks/features'
import Comparsion from 'blocks/comparsion'
import Line from 'blocks/line'
import Cases from 'blocks/cases'
import Parallax from 'blocks/parallax'
import Reviews from 'blocks/reviews'
import LineInfo from 'blocks/line-info'
import Form from 'blocks/form'
import BottomBlock from 'blocks/bottom'
import Prices from 'blocks/prices'

export default function Home() {
	return (
		<Layout>
			<Header/>
			<Features/>
			<Comparsion/>
			<Line/>
			<Cases/>
			<Parallax/>
			<Reviews/>
			<Prices/>
			<LineInfo/>
			<Form/>
			<BottomBlock/>
		</Layout>
	)
}
