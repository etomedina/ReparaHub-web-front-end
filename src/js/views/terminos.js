import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Terminos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
			<h3 className="text-danger p-2">Términos y condiciones </h3>

			<p className='p-2'>Lorem ipsum dolor sit amet. Qui molestias sunt est fugiat beatae ea temporibus repellendus. Ut temporibus eius et omnis dolor ut laudantium cupiditate id velit illum qui sunt dicta. Et nesciunt Quis quo libero dolorum sit distinctio sequi qui veniam nemo  rerum numquam ab blanditiis labore! 33 excepturi neque eos libero nesciunt aut voluptate galisum ea tempore velit in ipsam dolores quo fugiat architecto id dolores fugiat. Et fugiat autem et voluptatem repellendus 33 adipisci iure cum cumque voluptatem et molestiae obcaecati rem obcaecati distinctio. Et deleniti temporibus ut odio dolores eos quia aspernatur non omnis fugit vel nihil odit. Ex eveniet iste aut doloribus dolor  laboriosam ullam vel harum voluptatem et corrupti dolores! </p>
			<p className='p-2'>Sed sunt repellendus non quia debitis et debitis commodi? Aut voluptate consequuntur est soluta magnam sed quidem nisi hic mollitia laborum. Est rerum mollitia est asperiores doloribus aut dolore excepturi in quia accusantium sit sunt assumenda. Aut quos repudiandae et nulla recusandae a voluptatem voluptas et perspiciatis voluptatem id quos similique. Est optio consectetur et magnam nostrum 33 commodi unde. Nam deleniti omnis vel saepe cupiditate rem omnis dolores sit aliquam consequatur qui commodi minus eum sint illum eum dolor omnis? Quo dolorem porro eos nihil eius et nulla fugit non placeat harum et facere atque. Ex quia eveniet 33 nesciunt beatae aut officiis corporis. Aut velit amet qui deleniti nesciunt  harum rerum eos inventore reprehenderit sed mollitia quidem et repellendus tempore? </p>
			<p className='p-2'>Ut nesciunt sint ut dolores enim est sunt laudantium est unde nostrum. Ut quia odit aut fugiat velit ut suscipit quidem hic provident nisi vel odit perspiciatis ad fugit veritatis id dolor distinctio. Aut natus dignissimos ut dolorum minus et voluptas voluptate aut earum obcaecati et voluptatem culpa ad molestias inventore. Aut nulla consequatur ut sapiente dolorem ut tenetur porro sed nihil repellendus nam quae itaque eum maiores enim. Aut beatae numquam aut amet temporibus sit iure voluptas et enim dolor. At magnam eveniet At laborum quia et  fuga ut numquam odio ut delectus nostrum. Et consequuntur galisum est obcaecati velit in veniam magnam ab iusto sint sit vero distinctio vel odit voluptas. Qui molestias vitae sed quidem aliquid sed delectus cumque quo aliquam quidem. Est suscipit soluta qui magni enim sit voluptas vero sit molestiae neque qui obcaecati sequi hic explicabo corporis. </p>


			<Link to="/">
			<button className="btn rounded-pill btn-register mb-3">Regresar al inicio</button>
			</Link>
		</div>
	);
};

Terminos.propTypes = {
	match: PropTypes.object
};