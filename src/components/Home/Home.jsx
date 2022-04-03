import  "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Style.css";

function Home (){


    return(
      <>
      <div className="top m-3">
	<div className="columns">
		<div className="column is-full featured_wrapper p-0">
			<img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg" class="featured"/>
			<div className="title_wrapper">
				<span className="has-text-white">Trending Today</span>
				<h1 className="title is-1 has-text-white">The Untold Story of the great Valley and what is behind mountain</h1>
				<button className="button is-medium">Watch It Now</button>
			</div>
		</div>
	</div>
</div>
<div className="accordion">
  <ul>
    <li>
      <div className="image_title">
        <h4>Transformers: The Last Knight</h4>
      </div>
      <h4><img src="https://image.ibb.co/k7P0kS/transformers4_640x320.jpg" alt="transformers4_640x320" border="0"/></h4>
    </li>
    <li>
      <div className="image_title">
        <h4>Blade Runner 2049</h4>
      </div>
      <h4><img src="https://image.ibb.co/ct9rQS/Blade_Runner2049_640x320.jpg" alt="Blade_Runner2049_640x320" border="0"/></h4>
    </li>
    <li>
      <div className="image_title">
        <h4>Guardians of the Galaxy: Vol. 2</h4>
      </div>
      <h4><img src="https://image.ibb.co/jAu0kS/GOG2_640x320.jpg" alt="GOG2_640x320" border="0"/></h4>
    </li>
    <li>
      <div className="image_title">
        <h4>Spiderman: Homecoming</h4>
      </div>
      <h4><img src="https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg" alt="spiderman_homecoming_640x320" border="0"/></h4>
    </li>
    <li>
      <div className="image_title">
        <h4>Wonder Woman</h4>
      </div>
      <h5><img src="https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg" alt="Wonder_Woman_640x320" border="0"/></h5>
    </li>
  </ul>
</div>

</>
    )
}

export default Home