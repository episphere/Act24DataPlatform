import { getFileInfo } from "./../shared.js";

export const infoDeck = () => {
    let template = '';
    template += `
        <div class="secondary-bg padding-bottom-1rem">
            <div class="confluence-banner">
                <img src="./static/images/Picture7.jpg" class="banner-logo" style="min-height: 120px;" alt="ACT24 background">
                <div class="banner-overlay-text row justify-content-center text-center">
                    <div class="col-xl-12">
                        <h1 class="banner-overlay-h1">ACT24 DATA PLATFORM</h1>
                        <div class="banner-overlay-line"></div>
                        <h2 class="banner-overlay-h3" style="font-size:1.7vw;">Nationwide Surveys Using Activities Completed Over 24 Hours</h2>
                    </div>
                </div>
            </div>
            <div class="container align-middle text-center" style="margin-top: 70px;">
                <div class="row" id="infoDeck" style="min-height: 200px;">`
                    template += cardContents({header: 'Learn about <img src="./static/images/act24.png" style="max-height: 100%;" alt="ACT24 background">', button: 'Learn about ACT24', href: '#about/overview', icon: 'fa-download', explanation: 'Learn about the aims of ACT24'})
                    template += cardContents({header: 'Nationwide Survey Details', button: 'Survey Details', href: '#surveyDetails', icon: 'fa-chart-bar', explanation: 'View objectives and methods for two surveys conducted in 2019 and 2020'})
                    template += cardContents({header: 'Data Dictionary', button: 'Data dictionary', href: '#data_exploration/dictionary', icon: 'fa-database', explanation: 'View data dictionary for available survey data'})
                    template += cardContents({header: 'Data Access', button: 'Data Access', href: '#data_access', icon: 'fa-handshake', explanation: 'View procedures for accessing data'})
                template += `</div>
            </div>
        </div>
        <div class="secondary-bg inverse-triangle"></div>
        <div class="container align-center">
            <div class="font-size-28 font-bold font-family-helvetica our-goals mt-3 mb-2">OUR GOALS</div>
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 font-size-18 align-left">Insert a brief description of ACT24 Goals</div>
                <div class="col-lg-3"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-auto font-size-18 align-left mb-3">
                    <ul>
                        <li>ACT24 Bullet</li>
                        <li>ACT24 Bullet</li>
                        <li>ACT24 Bullet</li>
                    </ul>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
        <div class="ternary-bg">
            <div class="container align-left confluence-info font-family-helvetica">
                <div>ACT24 was developed by National Cancer Institute (NCI) investigators in the Division of Cancer Epidemiology and Genetics and the Division of Cancer Control and Population Sciences.</div>
            </div>
        </div>
    `
    document.getElementById('confluenceDiv').innerHTML = template;
}

export const infoDeckAfterLoggedIn = async () => {
    // const studyDescription = await getFileInfo(761599566277);
    // let template = '';
    // template += `
    //     <div class="secondary-bg padding-bottom-1rem">
    //         <div class="confluence-banner">
    //             <img src="./static/images/hero-banner.jpg" class="banner-logo" style="min-height: 120px;" alt="Confluence logo">
    //             <div class="banner-overlay-text row justify-content-center text-center">
    //                 <div class="col-md-12">
    //                     <h1 class="banner-overlay-h1">CONFLUENCE DATA PLATFORM</h1>
    //                     <div class="banner-overlay-line"></div>
    //                     <h2 class="banner-overlay-h3" style="font-size:1.7vw;">Uncovering breast cancer genetic susceptibility</h2>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="container align-middle text-center" style="margin-top: 70px;">
    //             <div class="row" id="infoDeck" style="min-height: 200px;">`
    //             if(studyDescription) template += cardContents({header: 'Study Description', button: 'Study description', href: '#about/description', icon: 'fa-file-alt', explanation: 'View descriptions of participating studies.'})
    //             template += cardContents({header: 'Data Dictionary', button: 'Data dictionary', href: '#data_exploration/dictionary', icon: 'fa-database', explanation: 'View variables from participating studies.'})
    //             template += cardContents({header: 'Explore Data', button: 'Explore Data', href: '#data_exploration/summary', icon: 'fa-chart-bar', explanation: 'Explore summary-level data to plan analyses.'})
    //             template += cardContents({header: 'Data Access', button: 'Data Access', href: '#data_access', icon: 'fa-handshake', explanation: 'The Confluence Project is currently generating new genotyping data and harmonizing existing data across participating studies.'})
    //             template += `</div>
    //         </div>
    //     </div>
    //     <div class="secondary-bg inverse-triangle"></div>
    //     <div class="container align-center">
    //         <div class="font-size-28 font-bold font-family-helvetica our-goals mt-3 mb-2">OUR GOALS</div>
    //         <div class="row">
    //             <div class="col-lg-3"></div>
    //             <div class="col-lg-6 font-size-18 align-left">To build a large research data resource of approximately 300,000 breast cancer cases and 300,000 controls for multi-ancestry genome wide association studies (GWAS) to:</div>
    //             <div class="col-lg-3"></div>
    //         </div>
    //         <br>
    //         <div class="row">
    //             <div class="col-lg-3"></div>
    //             <div class="col-lg-auto font-size-18 align-left mb-3">
    //                 <ul>
    //                     <li>Discover variants for breast cancer risk overall and by subtype</li>
    //                     <li>Develop multi-ancestry polygenic risk scores for personalized risk assessment</li>
    //                     <li>Discover variants for breast cancer survival, pharmacogenomics, and second cancers</li>
    //                 </ul>
    //             </div>
    //             <div class="col-lg-2"></div>
    //         </div>
    //     </div>
    //     <div class="ternary-bg">
    //         <div class="container align-left confluence-info font-family-helvetica">
    //             <div><a href="https://dceg.cancer.gov/research/cancer-types/breast-cancer/confluence-project" target="_blank" rel="noopener noreferrer">Confluence</a> is a large international project to study breast cancer genetic susceptibility in women and men of multiple ancestries, by integrating existing and new genome-wide genetic data, across several breast cancer consortia. Confluence is funded by the US National Cancer Institute (NCI), and coordinated by the <a href="https://dceg.cancer.gov/" target="_blank" rel="noopener noreferrer">Division of Cancer Epidemiology and Genetics (DCEG)</a> of NCI.</div>
    //         </div>
    //     </div>
    // `
    // document.getElementById('confluenceDiv').innerHTML = template;
}

const cardContents = (obj) => {
    return `
        <div class="col-xl card confluence-cards" style="min-width:225px">
            <div class="primary-bg rounded-circle" style="margin-top: -40px; padding: 10px;">
                <i class="fas ${obj.icon} fa-2x icon-padding font-white"></i>
            </div>
            <div class="card-body">
                <div class="card-title" style="color: #333B4D">
                    <div class="font-size-28"><b>${obj.header}</b></div>
                </div>
                <p class="text-secondary card-text font-size-14">
                    ${obj.explanation}
                </p>
            </div>

            <div class="white-bg border-top-0 card-footer" style="width: 100%;">
                <a class="stretched-link font-white my-2 border border-0 font-bold btn primary-bg" style="width: 90%;" href="${obj.href}" style="text-decoration: none;">${obj.button}</a>
            </div>
        </div>
        `;
}