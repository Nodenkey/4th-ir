import React, {lazy, Suspense, useState} from 'react';
import {GlobalStyle} from "./utils/global";
import NavBar from "./components/navbar/navbar.component";
import {Switch, Route} from 'react-router-dom';
import Loading from "./components/loading/loading.component";
import Footer from "./components/footer/footer.component";
import ScrollToTop from "./utils/scroll-to-top";
import "./utils/scroll-disappear";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SuccessModal from "./components/modals/success-modal.component";
import FailedModal from "./components/modals/failed-modal.component";

const Home = lazy(() => import("./pages/home"));
const VirtualTeamPage = lazy(() => import("./pages/virtual-team"));
const LearnMorePage = lazy(() => import("./pages/learn-more"));
const CaseStudyPage = lazy(() => import("./pages/case-study"));
const VisionPage = lazy(() => import("./pages/vision"));
const HealthPage = lazy(() => import("./pages/health"));
const WealthPage = lazy(() => import("./pages/wealth"));
const TeamPage = lazy(() => import("./pages/team"));
const ProductsPage = lazy(() => import("./pages/products"));
const RiskPage = lazy(() => import("./pages/risk"));
const IndustryPage = lazy(() => import("./pages/industry"));
const PartnersPage = lazy(() => import("./pages/partners"));
const AttorneysPage = lazy(() => import("./pages/attorneys"));
const ContactPage = lazy(() => import("./pages/contact"));
const ChallengesPage = lazy(() => import("./pages/challenges"));
const VCA = lazy(() => import("./pages/vca"));
const VCIA = lazy(() => import("./pages/vcia"));
const VCP = lazy(() => import("./pages/vcp"));
const VDS = lazy(() => import("./pages/vds"));
const VSI = lazy(() => import("./pages/vsi"));
const PeopleCounter = lazy(() => import("./pages/people-counter"));


function App() {
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);


    const closeFailedModal = () => {
        const html = document.querySelector('html');
        failed && setFailed(false);
        html.classList.remove('freeze');
    }
    const closeSuccessModal = () => {
        const html = document.querySelector('html');
        setSuccess(false);
        html.classList.remove('freeze');
    }

    const showFailedModal = () => {
        const html = document.querySelector('html');
        html.classList.add('freeze');
        !failed && setFailed(true);
    }
    const showSuccessModal = () => {
        const html = document.querySelector('html');
        html.classList.add('freeze');
        !success && setSuccess(true);
    }

    return (
        <div className="App">
            <GlobalStyle/>
            <Suspense fallback={<Loading/>}>
                <NavBar/>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/virtual-team' component={VirtualTeamPage}/>
                    <Route path='/learn-more' component={LearnMorePage}/>
                    <Route path='/vision' component={VisionPage}/>
                    <Route path='/health' component={HealthPage}/>
                    <Route path='/wealth' component={WealthPage}/>
                    <Route path='/products' component={ProductsPage}/>
                    <Route path='/vca' component={VCA}/>
                    <Route path='/vcia' component={VCIA}/>
                    <Route path='/vds' component={VDS}/>
                    <Route path='/vcp' component={VCP}/>
                    <Route path='/vsi' component={VSI}/>
                    <Route path='/team' component={TeamPage}/>
                    <Route path='/risk' component={RiskPage}/>
                    <Route path='/law' component={AttorneysPage}/>
                    <Route path='/partners' component={PartnersPage}/>
                    <Route path='/contact' component={() => <ContactPage showSuccessModal={showSuccessModal}
                                                                         showFailedModal={showFailedModal}/>}/>
                    <Route path='/industry' component={IndustryPage}/>
                    <Route path='/case-study' component={CaseStudyPage}/>
                    <Route path='/innovation-challenges' component={ChallengesPage}/>
                    <Route path='/people-counter' component={PeopleCounter}/>
                </Switch>
                <Footer/>
                {
                    success && <SuccessModal close={closeSuccessModal}/>
                }
                {
                    failed && <FailedModal close={closeFailedModal}/>

                }
            </Suspense>
        </div>
    );
}

export default App;
