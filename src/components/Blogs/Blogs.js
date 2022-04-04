import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
           <div className='blog'>
        <h2>How React Context API Works?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app.</p>
           </div>
           <div className='blog'>
           <h2>What is a Semantic Tag?</h2>
           <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements are much easier to read.It has greater accessibility. It offers a better user experience.<br></br>Examples,
           <li>article</li>
           <li>section</li>
           <li>footer</li>
           <li>main</li>
           <li>nav</li>

           </p>
           </div>
           <div className='blog'>
           <h2>Inline vs Block vs Inline-Block ?</h2>
            <p>
                <p><span className='span-p'>Inline Elements</span> <br></br> Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are span , strong, and img tags.</p>

                <p><span className='span-p'>Block Elements</span> <br></br>A block element always starts on a new line, and fills up the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom.</p>

                <p><span className='span-p'>Inline-Block Elements</span> <br></br> Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You'll have to declare display: inline-block in your CSS code.</p>
            </p>
           </div>
        </div>
    );
};

export default Blogs;