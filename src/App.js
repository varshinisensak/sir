import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List, Input } from 'antd';
import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import basket from './image/basket.png'
import flip from './image/flip.png'

const productData = require('./component.js/values.json');
const onSearch = value => console.log(value);
function App() {
  const { Search } = Input;
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const { Meta } = Card;
  console.log("initial", productData.Array)
  const [productDataArr, setProductDataArr] = useState(productData.Array);
  const incNum1 = (e, item) => {
    console.log(e, item);
    item.count = item.count + 1;
    productDataArr[item.id - 1] = item;
    const array = [...productDataArr]
    console.log(productDataArr)
    setProductDataArr(array);
  }
  useEffect(() => {
    console.log('productDataArr', productDataArr)
    // onClickFn();
  }, [productDataArr]);
  const decNum1 = (e, item) => {
    item.count = item.count - 1;
    productDataArr[item.id - 1] = item;
    const array = [...productDataArr]
    console.log(productDataArr)
    setProductDataArr(array);
  }
  const onClickFn = (x) => {
    console.log(x);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="pic">
          <div className="LOgoblock">
            <img src={flip} className="sho" height="43px" alt={flip} />
          </div>
          <div className="search-menu-block" >
            <ul>
              <li>

                <img src={"https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg"} className="menu" height="36px" alt="menu" />
                <a>
                  <span className="shop">shopby</span>
                </a>
              </li>
            </ul>
          </div>
          <div>

            <input type="text" placeholder="what would you like to buy today" autocomplete="off" className="search" />
          </div>
          <div>
            <ul>
              <li>
                <img src={basket} className="basket" alt={basket} />
              </li>
              <li>
                <img src={"https://cflare.shop.bigbazaar.com/assets/desktop/images/customer/default-user-image.jpg"} className="circle_img.small" height="52px" alt="login" />
              </li>
              <span >LogIn</span>
            </ul>
          </div>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </Header>
      <Layout className="site-layout-background"  >
        <Sider className="site-layout-background" >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5']}
          // style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="VEGETABLES">
              <Menu.Item key="1">Tomato</Menu.Item>
              <Menu.Item key="2">Potato</Menu.Item>
              <Menu.Item key="3">Cabage</Menu.Item>
              <Menu.Item key="4">Carrot</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="FRUITS">
              <Menu.Item key="5">Apple</Menu.Item>
              <Menu.Item key="6">Orange</Menu.Item>
              <Menu.Item key="7">Guava</Menu.Item>
              <Menu.Item key="8">Papaya</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ShoppingOutlined />} title="DRESS">
              <Menu.Item key="9">Kurtis</Menu.Item>
              <Menu.Item key="10">Salwar</Menu.Item>
              <Menu.Item key="11">Jeans</Menu.Item>
              <Menu.Item key="12">Tops</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<ShoppingCartOutlined />} title="CASUALS">
              <Menu.Item key="13">Bread</Menu.Item>
              <Menu.Item key="14">Noodles</Menu.Item>
              <Menu.Item key="15">Jams</Menu.Item>
              <Menu.Item key="16">Umberella</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<ShoppingCartOutlined />} title="Grocery">
              <Menu.Item key="17">Lotion</Menu.Item>
              <Menu.Item key="18">Papad</Menu.Item>
              <Menu.Item key="19">Boost</Menu.Item>
              <Menu.Item key="20">Rice</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }} >
            <List
              grid={{
                gutter: 0,
                xl: 6,
                xxl: 6,
              }}
              dataSource={productDataArr}
              renderItem={item => (
                <List.Item>
                  <Card
                    onClick={(e) => onClickFn(item.name)}
                    cover={<img alt={item.name} src={item.url} />}
                  >
                    <Meta title={item.name} description={item.price} />
                    <span className="addbtn-new ripple" >
                      {!item.count ? (
                        <div>
                          <button onClick={(e) => incNum1(e, item)}>Add</button>
                        </div>
                      ) : (
                        <>
                          <button onClick={(e) => incNum1(e, item)}>+</button>
                          {item.count}
                          <button onClick={(e) => decNum1(e, item)}>-</button>
                        </>
                      )}
                    </span>
                  </Card>
                </List.Item>
              )}
            />,
 </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default App;




// import React, { useEffect, useState } from "react";
// import 'antd/dist/antd.css';
// import './index.css';
// import './App.css';
// import { Layout, Menu, Breadcrumb, Card, List, Input } from 'antd';
// import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import basket from "./image/basket.jpg"
// import flip from "./image/flip.png"
// const productData = require('./component.js/values.json');
// const onSearch = value => console.log(value);
// function App() {
//   const { Search } = Input;
//   const { SubMenu } = Menu;
//   const { Header, Content, Sider } = Layout;
//   const { Meta } = Card;

// console.log("initial",productData.Array)


// const [productDataArr, setProductDataArr] = useState(productData.Array);


// const incNum1=(e, item)=>{
//   console.log(e, item);
//   item.count = item.count + 1;
//   productDataArr[item.id - 1] = item;
//   const array= [...productDataArr]
//   console.log(productDataArr)
//   setProductDataArr(array);
// }


// useEffect(() => {
//   console.log('productDataArr', productDataArr)
//   // onClickFn();
// }, [productDataArr]);

// const decNum1=(e,item)=>{
//     item.count = item.count - 1;
//     productDataArr[item.id - 1] = item;
//     const array= [...productDataArr]
//     console.log(productDataArr)
//     setProductDataArr(array);
// }
// const onClickFn = (x) => {
//   console.log(x);
// };

//   return (
//      <Layout>
//         <Header className="header">
//           <div className="pic">
//      <img src={flip} className = "sho" height = "43px"  alt={flip}></img>
//           <Search className = "Search" placeholder="input search text" onSearch={onSearch} enterButton   align="top" />
//           <img src={basket} className = "basket" height="43px" alt={basket} />
//            <img src = {"https://cflare.shop.bigbazaar.com/assets/desktop/images/customer/default-user-image.jpg"} className = "login" height="52px"  alt = "login" />

//         </div>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//                </Menu>
//         </Header>
//           <Layout className="site-layout-background"  >
//         <Sider className="site-layout-background" >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1','sub2' ,'sub3', 'sub4','sub5']}
//             // style={{ height: '100%' }}
//           >
//             <SubMenu key="sub1" icon={<ShoppingOutlined />} title="VEGETABLES">
//               <Menu.Item key="1">Tomato</Menu.Item>
//               <Menu.Item key="2">Potato</Menu.Item>
//               <Menu.Item key="3">Cabage</Menu.Item>
//               <Menu.Item key="4">Carrot</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<ShoppingCartOutlined  />} title="FRUITS">
//             <Menu.Item key="5">Apple</Menu.Item>
//               <Menu.Item key="6">Orange</Menu.Item>
//               <Menu.Item key="7">Guava</Menu.Item>
//               <Menu.Item key="8">Papaya</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub3" icon={<ShoppingOutlined />} title="DRESS">
//             <Menu.Item key="9">Kurtis</Menu.Item>
//               <Menu.Item key="10">Salwar</Menu.Item>
//               <Menu.Item key="11">Jeans</Menu.Item>
//               <Menu.Item key="12">Tops</Menu.Item>
//               </SubMenu>
//               <SubMenu key="sub4" icon={<ShoppingCartOutlined />} title="CASUALS">
//             <Menu.Item key="13">Bread</Menu.Item>
//               <Menu.Item key="14">Noodles</Menu.Item>
//               <Menu.Item key="15">Jams</Menu.Item>
//               <Menu.Item key="16">Umberella</Menu.Item>
//               </SubMenu>
//               <SubMenu key="sub5" icon={<ShoppingCartOutlined />} title="Grocery">
//             <Menu.Item key="17">Lotion</Menu.Item>
//               <Menu.Item key="18">Papad</Menu.Item>
//               <Menu.Item key="19">Boost</Menu.Item>
//               <Menu.Item key="20">Rice</Menu.Item>
//               </SubMenu>
//           </Menu>
//         </Sider>
//         <Content >
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }} >
//       <List
//     grid={{
//       gutter: 16,
//       xs: 1,
//       sm: 2,
//       md: 4,
//       lg: 4,
//       xl: 6,
//       xxl: 6,
//     }}
//     dataSource={productDataArr}
//     renderItem={item => (
//       <List.Item>
//     <Card
//           onClick={(e) => onClickFn( item.name)}
//           cover={<img alt={item.name} src={item.url} />}
//         >
//       <Meta title={item.name}  description={item.price}   />

//       <span className="addbtn-new ripple" >
//       {!item.count ? (

//         <div>
//            <button onClick={(e)=>incNum1(e, item)}>Add</button>
//         </div>
//       ) : ( 
//        <>
//         <button onClick={(e)=>incNum1(e, item)}>+</button>
//          {item.count}
//          <button onClick={(e)=>decNum1(e,item)}>-</button>
//          </>
//          )}
//       </span>

// </Card>
//       </List.Item>
//     )}

//   />,
//  </div>
//     </Content>
//         </Layout>
//  </Layout>


//   )
// }
// export default App; 



// import { useState } from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import './App.css';
// import { Layout, Menu, Breadcrumb, Card, List } from 'antd';
// import { ShoppingCartOutlined, NotificationOutlined, SkinTwoTone } from '@ant-design/icons';
// const productData = require ('./component.js/values.json');

// function App() {
//   const { SubMenu } = Menu;
//   const { Header, Content, Sider } = Layout;
//   const [num, setNum] = useState(0);
//   const incNum = () => {
//    if (num < 30) {
//       setNum(num + 1);
//     }
//   }
//   const decNum = () => {
//     if (num > 0) {
//       setNum(num - 1);

//     }
//   }

// return (
//     <div className="App">
//       <Layout>
//         <Header className="header">
//           <div className="logo" />
//           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//             <Menu.Item key="1">Dresses</Menu.Item>
//             <Menu.Item key="2">Fruits &amp; Vegatables</Menu.Item>
//             <Menu.Item key="3">Cakes</Menu.Item>
//           </Menu>
//         </Header>
//         <Layout>
//           <Sider width={200} className="site-layout-background">
//             <Menu
//               mode="inline"
//               defaultSelectedKeys={['1']}
//               defaultOpenKeys={['sub1']}
//               style={{ height: '100%', borderRight: 0 }}
//             >

//               <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
//                 <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
//                 <Menu.Item key="2">Tops,tees &amp; shirts</Menu.Item>
//                 <Menu.Item key="3">Palazoos &amp; jeans</Menu.Item>
//                 <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
//               </SubMenu>
//               <SubMenu key="sub2" icon={<SkinTwoTone />} title="fruits &amp; vegetables">
//                 <Menu.Item key="5">Pomegrante</Menu.Item>
//                 <Menu.Item key="6">Grapes</Menu.Item>
//                 <Menu.Item key="7">Orange</Menu.Item>
//                 <Menu.Item key="8">Pineapple</Menu.Item>
//               </SubMenu>
//               <SubMenu key="sub3" icon={< NotificationOutlined />} title="cakes">
//                 <Menu.Item key="9">plum</Menu.Item>
//                 <Menu.Item key="10">bluberry</Menu.Item>
//                 <Menu.Item key="11">blackcurrant</Menu.Item>
//                 <Menu.Item key="12">Apple pie</Menu.Item>
//               </SubMenu>
//             </Menu>
//           </Sider>
//           <Layout style={{ padding: '0 24px 24px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>List</Breadcrumb.Item>
//               <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>
//             <Content
//               className="site-layout-background"
//               style={{
//                 padding: 24,
//                 margin: 0,
//                 minHeight: 280,
//               }}

//             >
//               <List
//                 grid={{
//                   gutter: 16,
//                   xs: 1,
//                   sm: 2,
//                   md: 4,
//                   lg: 4,
//                   xl: 4,
//                   xxl: 3,
//                 }}
//                 dataSource={productData.Array}
//                 renderItem={item => (


//                   <List.Item>

//                     <Card

//                       title={item.title}>
//                       <img src={item.image} className="image-container" />
//                       <p>{item.name}</p>
//                       <p>{item.price}</p>
//                       <div>
//                         <button onClick={()=>incNum(item.id)}>+</button>
//                         {num}
//                         <button onClick={decNum}>-</button>

//                       </div>

//                     </Card>
//                   </List.Item>

//                 )}
//               />,
//   </Content>
//           </Layout>
//         </Layout>
//       </Layout>

//     </div>
//   );
// }

// export default App;