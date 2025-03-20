import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Title from 'src/components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
//#0c0711
const Endorsements = () => (
    <SubTitle id="endorsements-received" text="Endorsements Received">
                    <section>
                        <h3><Link href="https://www.linkedin.com/in/mattgarrepy/" target="_blank" rel="noopener noreferrer">Matthew Garrepy</Link></h3>
                        <p className="p">
                            &quot;John is a natural learner. While managing him through a complex app rebuild in React, 
                            he quickly absorbed our practices, guided his way through the requirements, and produced 
                            excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                            aptitude to absorb new systems quickly and cogently.&quot;
                        </p>
                        <p className="p">
                            &quot;John is a fantastic resource for any digital organization looking to scale a project quickly 
                            with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                            collaborates well with other team members.&quot;
                        </p>
                    </section>
                    <section>
                        <h3><Link href="https://www.linkedin.com/in/luisgustavosc/" className="text-darker-bg" target="_blank" rel="noopener noreferrer">Luis G. Sanchez</Link></h3>
                        <p className="p">
                            &quot;John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                            app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                            matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                            asset to any team.&quot;
                        </p>
                    </section>
    </SubTitle>
            
);

export default Endorsements;