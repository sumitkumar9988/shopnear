import React , {useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Product from '../Component/Product'
import Message from '../Component/Message'
import Loader from '../Component/Loader'
import Paginate from '../Component/Paginate'
import Meta from '../Component/Meta'
import {listProduct} from '../actions/productAction'

const HomeScreen = ({match} ) => {

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()

   const productList=useSelector(state=>state.productList);
   const {loading, error, products, page, pages }=productList;

   useEffect(()=>{
       dispatch(listProduct(keyword, pageNumber))
   },[dispatch, keyword, pageNumber])

    return (
        <>
             <Meta />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
        </>
    )
}

export default HomeScreen
