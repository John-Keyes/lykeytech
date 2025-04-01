import React from 'react';
import Link from 'next/link';
import SubTitle from 'src/components/layout/title';
import Tag from 'src/components/tag';
import Card from 'src/components/card';


const Samples = () => (
        <div className="bg-light-gray">
                <div className="flex flex-column content-container content-container-padding">
                    <SubTitle id="work-samples" text="Work Samples">
                                      <h3 id="github-projects"><Link href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">Github Projects</Link></h3>
                                        <h4>lykey-restapi</h4>
                                        <p className="p">This project shows how to setup authentication and authorization the backend.</p>
                                        <p className="p">
                                            <span>Tools:</span>
                                              <Tag href="https://www.python.org/" text="Python"/>
                                              <Tag href="https://fastapi.tiangolo.com/" text="FastAPI"/>
                                              <Tag href="https://github.com/astral-sh/uv" text="UV"/>
                                              <Tag href="https://www.sqlalchemy.org/"  text="SQLAlchemy"/>
                                              <Tag href="https://www.mysql.com/"  text="MySQL"/>
                                              <Tag href="https://redis.io/"  text="Redis"/>
                                              <Tag href="https://alembic.sqlalchemy.org/"  text="Alembic"/>
                                              <Tag href="https://sass-lang.com/"  text="SCSS"/>
                                              <Tag href="https://docs.python.org/3/library/venv.html"  text="VENV"/>
                                          </p>
                                          
                                          <h4>task-frontend & task-backend</h4>
                                          <p className="p">The combination of the task-frontend & task-backend is just a project that shows people I am knowledgable on how full stack development works.</p>
                                          <p className="p">
                                              <Tag href="https://nextjs.org/" text="Next"/>
                                              <Tag href="https://www.prisma.io/" text="Prisma"/>
                                              <Tag href="https://nodejs.org/" text="Node"/>
                                              <Tag href="https://expressjs.com/" text="Express"/>
                                              <Tag href="https://www.docker.com/" text="Docker"/>
                                              <Tag href="https://sass-lang.com/" text="SCSS"/>
                                              <Tag href="https://www.mysql.com/" text="MySQL"/>
                                          </p>
                                        <Card>
                                    <h3 id="work-in-teams">Work In Teams</h3>
                                      <h4>
                                          <Link href="https://cmscritic.com" target="_blank" rel="noopener noreferrer">
                                              CMSCritic
                                          </Link>
                                      </h4><p className="p"> Company: 
                                          At <Link href="https://www.solodev.com" target="_blank" rel="noopener noreferrer">
                                           Solodev
                                          </Link>
                                        </p>
                                      <p className="p"> 
                                              <span>Tools:</span>
                                              <Tag href="https://nextjs.org/" text="Next"/>
                                              <Tag href="https://sequelize.org/" text="Sequelize"/>
                                              <Tag href="https://nodejs.org/" text="Node"/>
                                              <Tag href="https://aws.amazon.com/cloudformation/" text="AWS Cloudformation"/>
                                              <Tag href="https://aws.amazon.com/s3/" text="AWS S3"/>
                                              <Tag href="https://www.docker.com/" text="Docker"/>
                                              <Tag href="https://redis.io/" text="Redis"/>
                                              <Tag href="https://sass-lang.com/" text="SCSS"/>
                                          </p>
                                          </Card>
                                    <h3>MySELENA Application</h3>
                                    <ul>
                                    <li><p className="p">
                                        SELENA is a mobile application that contains a curriculum for instructors to educate K-12 students on their emotions. These lessons are also on the SELENA
                                     <Link href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">website</Link>.
                                     It is available on <span className="fa-brands fa-app-store"/><Link href="https://apps.apple.com/us/app/my-selena/id1504764818" target="_blank" rel="noopener noreferrer">App Store</Link> and 
                                     <span className="fa-brands fa-google-play"/><Link href="https://play.google.com/store/apps/details?id=org.mylearningtools.app&hl=en_US&pli=1" target="_blank" rel="noopener noreferrer">Google Play</Link>
                                    </p></li>
                                    <li><p className="p">
                                        <span>Tools:</span>
                                        <Tag href="https://reactnative.dev/" text="React Native"/>
                                        <Tag href="https://expo.dev/" text="Expo"/>
                                        <Tag href="https://nodejs.org/" text="Node"/>
                                        <Tag href="https://www.mysql.com/" text="MySQL"/>
                                        <Tag href="https://developer.android.com/studio" text="Android Studio"/>
                                        <Tag href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                    </p></li>
                                </ul>
                        </SubTitle>
                    </div>
        </div>    
);

export default Samples;