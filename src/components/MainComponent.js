import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from '../pages/Home/HomePage';
import AboutUs from '../pages/AboutUs/AboutUsPage';
import BoardMember from './BoardMemberComponents/BoardMemberComponent';
import ContactUs from '../pages/ContactUs/ContactUsPage';
import FoodBank from '../pages/FoodBankPage';

import BookDrive from './BookDriveComponent';
// import HomePage from '../homepage.component';
// import BoardMembers from './BoardMembersComponent';

// const BoardMemberDetail = ({match}) => {
//     const details = [
//         {
//             id: "genine-suggs",
//             name: "Genine Suggs",
//             bio: "I, Genine Suggs, am the President and Founder of Majaek's Heart Association. Majaek's Heart received its name from my six children, five which I birthed and the sixth child who came into my life later on and imprinted her heart on to mine. Their names are Maiya, Akil, Jose, Ananda, Elayme and Khalil. I am currently an LTACH Nurse working in a local hospital, however, I became a nurse in 2011 and was a CNA prior to that since 2000. I always extend my love for others by way of financial, emotional, spiritual, and physical support. I wanted to start a nonprofit organization because of the events that took place in my life. I was homeless, lived in shelters for several years, and didn’t have enough education to earn enough money to make ends meet. So I do know the struggle that life brings you. However, if you look at life as the head and you are the neck, you can turn the neck anywhere you want, which will determine how you want your life to turn out. Because I know I had the will to do better and the want to do better, I knew there were others just like me that I could help who were in similar situations as I was. Although I have always extended my love to others, I know that I could not have gotten this far without my husband Ernest, my children (Majaek's Heart) and my Board Members: Kenya, Rosie, and Vanessa. Together we will uphold and make Majaek’s Heart a committed nonprofit organization that is dedicated to helping no income, low income, and homeless families of Pennsylvania. We are a committee of all nurses working together with one goal in mind; to assist our community in any way possible with items necessary for daily living. That is my goal and lifelong plan as well as Majaek's Heart mission statement.",
//             bioImage: <img src="/assets/images/Genine_bio.jpg" alt="Genine Suggs" />,
//             bioQuote: '“The question isn’t who is going to let me; it’s who is going to stop me.” —Ayn Rand'
//         },
//         {
//             id: "vanessa-texidor-pringle",
//             name: "Vanessa Texidor Pringle",
//             bio: "Vanessa Texidor Pringle is a Registered Nurse in a long-term acute care hospital in northeastern Pennsylvania. She has been in the healthcare field since 2006, working as a personal care aide, an LPN for ten years, and finally as an RN since 2019. She and her husband D’angelo have two children, Shayla and Preston, she is a step-mother to D’angelo’s son, Jovon, and a grandmother to Jovon’sdaughter, Melissa. When she and her husband are not working, they enjoy hunting for new playgrounds with their kids, traveling as a family, cooking, eating, shopping, and fishing. She also owns a personal business, Vanessa Pringle Photography, which specializes in family portraits. As a child, along with her mother and sisters, Vanessa experienced poverty, homelessness, abuse, domestic violence, trauma and fear. As a young adult, she battled severely low self-esteem which led her to cope with drugs and alcohol. In her late twenties, Vanessa regained control over her life through positive friendships and healthy habits. After the birth of her second child, she returned to college and earned her ADN in Applied Science, restoring her faith in her ability to succeed. She is now in the midst of strengthening her mental health and will begin grad school in May of 2021 to become a Nurse Practitioner. Vanessa is the Executive Assistant for Majaek’s Heart Association. She met the president and founder, Genine Suggs, at their place of work, and when she heard how much good Genine was doing in the community she knew she had to be a part of it. She is thankful to be a member of the Majaek’s Heart family and is excited for their future.",
//             bioImage: <img src="/assets/images/Vanessa.jpg" alt="Vanessa Texidor Pringle" />,
//             bioQuote: '"Grateful to live, love, and be loved; family over everything.” —Vanessa Texidor Pringle'
//         },
//         {
//             id: "roseann-blake",
//             name: "Roseann Blake",
//             bio: "Roseann Blake is a Registered Nurse in Northeast Pennsylvania. Roseann’s mother was a battered wife with little education and 2 young children. In 1978 her mother entered the battered women shelter in NYC. Roseann remembers moving from state to state with no rhyme or reason and by the age of 14 she had lived in 7 states I in 5 years. In hindsight Roseann realized that the multiple moves her mother made was to escape the abusive husband who continued to follow her. Roseann’s mother encouraged her to be independent. Roseann received her GED in 1989 after the birth of her son. Became an Emergency Medical Technician and worked for 15 years.  Roseann moved to Northeast PA and returned to school to become an RN-BSN. Roseann always wanted to help the women from the battered women shelter but like most people was never able to find the time. May 2019 Roseann was forced to retire due to physical impairments that left her unable to fulfill her duties as Director of Nursing in a nursing home. Genine Suggs LPN, a coworker and longtime friend approached Roseann to become the treasurer for Majaek’s Heart a non-profit organization geared to helping the low to no income families in our area. Roseann has found purpose in giving back to these families and the Domestic Violence Organizations in Northeast PA.",
//             bioImage: <img src="/assets/images/Rosie.jpg" alt="Roseann Blake" />,
//             bioQuote: '""'
//         }
//     ];

//     return (
//         <div>
//             <BoardMember detail={details.find(detail => detail.id === match.params.boardMemberID)} />
//         </div>
//     );
// };

class Main extends Component {
    render() {

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Route exact path='/aboutus/:name' component={BoardMember} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Route exact path='/bookdrive' component={BookDrive} />
                    <Route exact path='/foodbank' component={FoodBank} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;