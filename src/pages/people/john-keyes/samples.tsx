import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Title from 'src/components/layout/title';
import SubTitle from 'src/components/layout/title';
//#0c0711
const Samples: NextPage = () => (
        <div className="flex flex-column content-container">
                  <Title id="work-samples" text="Work Samples"/>
                                  <SubTitle id="github-projects" text={<Link href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">Github Projects</Link>}>
                                      <h3>REST-API</h3>
                                        <ul>
                                        <li><p className="p">Status: Github Display</p></li>
                                        <li><p className="p">This project shows how to setup authentication and authorization the backend.</p></li>
                                        <li><p className="p">This API follows the REST architecture.</p></li>
                                        <li><p className="p">
                                              Tools: 
                                              <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                                                  Python
                                              </Link>
                                              , 
                                              <Link href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
                                                  FastAPI
                                              </Link>
                                              , 
                                              <Link href="https://github.com/astral-sh/uv" target="_blank" rel="noopener noreferrer">
                                                  UV
                                              </Link>
                                              , 
                                              <Link href="https://www.sqlalchemy.org/" target="_blank" rel="noopener noreferrer">
                                                  {"SQLAlchemy (MySQL)"}
                                              </Link>
                                              , 
                                              <Link href="https://redis.io/" target="_blank" rel="noopener noreferrer">
                                                  {"Redis (For Authentication Sessions)"}
                                              </Link>
                                              , 
                                              <Link href="https://alembic.sqlalchemy.org/" target="_blank" rel="noopener noreferrer">
                                                  Alembic
                                              </Link>
                                              , 
                                              <Link href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                                  SASS
                                              </Link>
                                              , 
                                              <Link href="https://docs.python.org/3/library/venv.html" target="_blank" rel="noopener noreferrer">
                                                  VENV
                                              </Link>
                                          </p></li>
                                          </ul>
                                          <h3>task-frontend & task-backend</h3>
                                          <ul>
                                          <li><p className="p"></p></li>
                                          <li><p className="p">Status: Github Display</p></li>
                                          <li><p className="p">The combination of the task-frontend & task-backend is just a project that shows people I am knowledgable on how full stack development works.</p></li>
                                          <li><p className="p">
                                              Tools: 
                                              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                                  {"Next.ts (React.js framework)"}
                                              </Link>
                                              , 
                                              <Link href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
                                                  Prisma
                                              </Link>
                                              , 
                                              <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                                  Node
                                              </Link>
                                              ,
                                              <Link href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                                  Express
                                              </Link>
                                              , 
                                              <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                                                  {"Docker"}
                                              </Link>
                                              , 
                                              <Link href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                                  {"Sass"}
                                              </Link>
                                          </p></li>
                                          </ul>
                                    </SubTitle>
                                  <SubTitle id="work-under-companies" text="Work under Companies">
                                      <h3>
                                          <Link href="https://cmscritic.com" target="_blank" rel="noopener noreferrer">
                                              CMSCritic
                                          </Link>
                                      </h3>
                                      <ul>
                                      <li><p className="p"> Company: 
                                          <Link href="https://www.solodev.com" target="_blank" rel="noopener noreferrer">
                                           Solodev
                                          </Link>
                                      </p></li>
                                      <li><p className="p"> Status: Published</p></li>
                                      <li><p className="p"> 
                                              Tools: 
                                              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                                  {"Next.ts (React.js framework)"}
                                              </Link>
                                              , 
                                              <Link href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">
                                                  Sequelize
                                              </Link>
                                              , 
                                              <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                                  Node
                                              </Link>
                                              , 
                                              <Link href="https://aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer">
                                                  {"AWS Cloudformation"}
                                              </Link>
                                              , 
                                              <Link href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">
                                                  {"AWS S3"}
                                              </Link>
                                              , 
                                              <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                                                  {"Docker"}
                                              </Link>
                                              , 
                                              <Link href="https://redis.io/" target="_blank" rel="noopener noreferrer">
                                                  {"Redis (For Authentication Sessions)"}
                                              </Link>
                                              , 
                                              <Link href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                                  {"Sass"}
                                              </Link>
                  
                                          </p></li>
                                        </ul>
                                    <h3>MySELENA Application</h3>
                                    <ul>
                                    <li><p className="p">Status: Published</p></li>
                                    <li><p className="p">SELENA is a mobile application that educates K-12 students on their emotions. These lessons are also on the SELENA
                                     <Link href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">website</Link>.
                                    </p></li>
                                    <li><p className="p"><span className="fa-brands fa-app-store"/><Link href="https://apps.apple.com/us/app/my-selena/id1504764818" target="_blank" rel="noopener noreferrer">App Store</Link>
                                    </p></li>
                                    <li><p className="p"><span className="fa-brands fa-google-play"/><Link href="https://play.google.com/store/apps/details?id=org.mylearningtools.app&hl=en_US&pli=1" target="_blank" rel="noopener noreferrer">Google Play</Link>
                                    </p></li>
                                    <li><p className="p">
                                    Tools: 
                                              <Link href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                                                  {"React Native"}
                                              </Link>
                                              , 
                                              <Link href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
                                                  Expo
                                              </Link>
                                              , 
                                              <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                                  Node
                                              </Link>
                                              , 
                                              <Link href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                                                  {"MySQL"}
                                              </Link>
                                              , 
                                              <Link href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                                                  {"Android Studio"}
                                              </Link>
                                              , 
                                              <Link href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" target="_blank" rel="noopener noreferrer">
                                                  {"AWS Lambda"}
                                              </Link>
                                              </p></li>
                                        </ul>
                                </SubTitle>
        </div>    
);

Samples.getInitialProps = async () => {
    return {
        pageTitle: "Samples LyKey",
        pageDescription: "John Keyes Samples | LyKey Tech"
    }
}
export default Samples;