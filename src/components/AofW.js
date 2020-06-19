import React, { useState } from 'react';
import { 
    TabContent, TabPane, Nav, NavItem, NavLink, 
    Card, Button, CardTitle, CardText, Row, Col, 
    ListGroup, ListGroupItem, ListGroupItemHeading, 
    ListGroupItemText } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div className= "container py-5"> 
            <div className= "row">
                <div className= "col-10 mx-auto text-center text-blue my-5">
                    <h1>The Art of War Podcast</h1>
                </div>
            </div>
            <div className= "row">
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src= "img/AofW.jpg" className= "img-fluid" alt= "Art of War" />
                </div>
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">

                    <h2>Presented By: Sun Tzu</h2>
                    <h5 className= "text-title mt-3 mb-2">
                    Sun Tzu was a Chinese general, military strategist, writer and philosopher who lived in the Eastern Zhou 
                    period of ancient China. Sun Tzu is traditionally credited as the author of The Art of War, an influential 
                    work of military strategy that has affected both Western and East Asian philosophy and military thinking
                    </h5>
                </div>
            </div>
            </div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  Season 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Season 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }}
                >
                  Season 3
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => { toggle('4'); }}
                >
                  Season 4
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '5' })}
                  onClick={() => { toggle('5'); }}
                >
                  Season 5
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '6' })}
                  onClick={() => { toggle('6'); }}
                >
                  Season 6
                </NavLink>
              </NavItem><NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '7' })}
                  onClick={() => { toggle('7'); }}
                >
                  Season 7
                </NavLink>
              </NavItem><NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '8' })}
                  onClick={() => { toggle('8'); }}
                >
                  Season 8
                </NavLink>
              </NavItem><NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '9' })}
                  onClick={() => { toggle('9'); }}
                >
                  Season 9
                </NavLink>
              </NavItem><NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '10' })}
                  onClick={() => { toggle('10'); }}
                >
                  Season 10
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>Meet Sun Tzu, as he goes into depth about his life and inspritations</CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Jim Butcher joined us at NASFIC for a discussion about how we can keep long-running serials 
                          engaging after numerous books.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          Let’s talk about serials. Jenn Court, whose work includes lots of  writing for TV (IMDB link), 
                          joins us for the discussion. What are the elements that get us, as readers or viewers, to come back for 
                          episode after episode, and how do we, as writers, identify those elements and set about synthesizing them?
                       </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          Shannon and Dean Hale join us again, this time to discuss how to effectively and convincingly write 
                          for¹ children. Children have their own unique sets of expectations for the books they read (as do their 
                          parents), and in this episode we talk about how to meet (or subvert) those.
                          </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          Shannon and Dean Hale join us to discuss how to effectively and convincingly write about¹ 
                          children. We cover dialog tools, point-of-view elements, stakes, and character ‘quirks’ that can help 
                          signal to the reader that a character is a child.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          In this episode we’ll be talking about the things we do to stay creative, productive, healthy, and happy. 
                          For the purposes of this discussion, “mental wellness” is not about coping with mental illness, it’s about 
                          self-care.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          We get lots of listener questions about how to use dialog for exposition without making it feel 
                          like we’re using dialog for exposition. And as Bob already knows, this episode is about answering those 
                          questions.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Many Writing Excuses listeners (especially WXR alumni) already know Shauna Hoffman. 
                          She joins us to talk about how to deal with the fact that we, as authors, 
                          often feel isolated.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          The listener question that sparked this episode: “How do you keep the pressure off when you feel alone?” 
                          How indeed? If this feels timely, well, some of that is coincidence. 
                          And some, of course, is not².
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          Generally speaking, asexuality is a sexual orientation or identity typified by the absence of a 
                          desire to have sex. It’s *way* more complicated than that, however, and in this episode Tempest helps 
                          us unpack it so that asexual characters can be written more effectively.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          We’re often asked how to balance character arcs with the intricacies of the plots we create. 
                          In this episode we talk about the various ways in which we do this.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          Listener questions drove this episode, and there are only two of them but they were pretty good drivers. 
                          Here they are: Is it a problem that all my dialog ends up as logic-based debates between characters?
                          What can I do to create more variety in my dialog structure?
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          The title of this episode comes to us from listener questions along the lines of 
                          “what do you do when you’re ‘in the trenches’ querying agents?” Our answers, predictably, 
                          have almost nothing to do with actual trenches.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Daniel Friend, who edits SF/F, has worked in election offices, has run for office, 
                          and has participated in campaigns. In this episode we talk about the ways elections can be 
                          worked into our stories.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          What can we do to be allies to members of marginalized groups? Many of us want to find ways 
                          to help others have safe, comfortable places within our communities, but worry about coming across 
                          the wrong way. In this episode, our hosts talk about how we can do this well as writers, as members of 
                          writing communities, and in society at large.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          “How do you break in?” is one of those questions we always get asked in some form or another, 
                          and it’s also one for which those of us who “broke in” more than a couple of years ago are increasingly 
                          unqualified to answer. The path “in” is always changing, and it seems to be changing faster as time goes on.
                          In this episode we’ll talk about how “digital” (read: “social media + everything else internet”) 
                          applies to building a career as a creative.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          We’ve talked in the past about how ideas are cheap, and that it’s execution upon those ideas 
                          which is what really matters. In this episode we’ll talk about how we evaluate things over there on the 
                          side of the equation where things are cheap and plentiful. Because while we have no shortage of ideas, they 
                          vary quite a bit in their value to us.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          “Should I go self-pub? Should I go traditional? Can I do both? How do I decide where my book fits?”
                          In this episode we’ll cover these, and many more questions as best we’re able.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
            <TabPane tabId="4">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          How do you create chapters? What are the rules for carving your manuscript into numbered chunks? 
                          Is chaptering part of your outline, is it something you discover while you write, or is it something else 
                          entirely? In this episode we talk about how we do it, and how we think about it while it’s being done.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          How do you write beautiful prose? How do you set about telling a story with words that sing 
                          (and dance, and tell jokes) instead of just conveying information in word-sized chunks?
                          In this episode we talk about how we do it, and how writers might set out to do good word-do like 
                          the best good word-doers do.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          What kind of career goal-setting do you do? We had a discussion in this vein with Dongwon a 
                          few weeks ago, but neither Brandon nor Victoria participated then, so it’s worth revisiting.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          We begin our discussion of revision by addressing a question we hear a lot: How do you know what 
                          needs to be changed? We talk about our various techniques for getting distance from our work, incorporating 
                          feedback, and breaking the process down into manageable chunks.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          Howard leads this discussion with four guests who are doing well with self publishing. 
                          They share some numbers with us, and talk about their strategies for reaching their audience, and making 
                          the most of their market.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          Victoria Schwab, who also writes as V.E. Schwab, joins us this year, and in this episode she 
                          helps us cover that deep concept of “theme,” and how we as authors can state our themes without coming 
                          straight out and stating them—writing our themes “between the lines.”
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          Season 5 is going to be a bit broader than the previous seasons have, at least in the abstract. 
                          We’re going to focus on your questions. In this episode we tackle the topic that dominates our collection 
                          of these questions: CAREER.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Natasha Ence is a professional game master. (Yes, you read that correctly.)
                          She joins us to discuss collaborative storytelling, and how the principles of game mastering for 
                          role-players can be applied to creating a fulfilling, engaging story.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          We’ve spent all year focusing on worldbuilding, and it’s time to move on.
                          Almost. In this episode we try to cover some points we may have missed, we talk about what we’ve 
                          learned, and discuss some of our favorite recent examples of worldbuilding.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                      We’ve all heard the adage “write what you know,” and in this episode we set out to un-misinterpret it. 
                      The phrase is fraught, and perhaps the most perilous bit is that it can be used an excuse to not write. 
                      Here at Writing Excuses we’re pretty committed to approaching things in ways that let us do MORE writing, 
                      so this topic is a great place for us to leave you out of excuses.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                      In this episode we discuss how our customs and mores govern our own real-world interactions, 
                      and how our understanding of these interactions can be applied to our worldbuilding.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                      The entire year has been about learning how to worldbuild, and we’ve learned a thing or 
                      two ourselves while preparing material for you. In this episode we talk about some of those 
                      lessons, and try to answer stray questions that didn’t fit into any of previous episode buckets.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="6">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                      In this episode we discuss how to faithfully represent people with physical disabilities through 
                      the characters we create. Our guest, Nicola Griffith, walks us through the process of rigorously 
                      imagining how the world might look to someone with a particular disability.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                      Among science fiction and fantasy plot devices, the “uncommon resource” trope is common enough 
                      to almost seem cliché. Fortunately (?), the economic principle of scarcity is ubiquitous enough 
                      in real life that most of us don’t even blink when presented with the idea in fiction.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          Economists tend to see everything as economics, which is kind of how proponents of ANY discipline 
                          see their discipline, but it’s not a bad way to look at worldbuilding through the lens of economics. 
                          In this episode we talk about how this works for us, and how it lets us roll our worldbuilding into 
                          our storytelling.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                      Where do you draw the line between what seems plausible, and what would be cool? If you pick “plausible,” 
                      how do you stay cool? If you pick “cool,” how do you avoid knocking the readers out of the story? And 
                      finally, how might we structure things so that when the time comes, we don’t need to choose one or the other, 
                      because we can have both?
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          Let’s talk about career planning. It’s a lot more than just launching a career by selling a book, 
                          and in this episode we talk about the kinds of things we want to be thinking about and preparing for beyond 
                          simply selling our next book or project.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                      Alternate histories (and historical fantasies) are a staple of genre fiction. In this episode we talk 
                      about the worldbuilding process, the tools we use, and the pitfalls we try to avoid when constructing these 
                      kinds of stories.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="7">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          We get lots of listener questions about how to use dialog for exposition without making it feel 
                          like we’re using dialog for exposition. And as Bob already knows, this episode is about answering those 
                          questions.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Many Writing Excuses listeners (especially WXR alumni) already know Shauna Hoffman. 
                          She joins us to talk about how to deal with the fact that we, as authors, 
                          often feel isolated.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          The listener question that sparked this episode: “How do you keep the pressure off when you feel alone?” 
                          How indeed? If this feels timely, well, some of that is coincidence. 
                          And some, of course, is not².
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          Generally speaking, asexuality is a sexual orientation or identity typified by the absence of a 
                          desire to have sex. It’s *way* more complicated than that, however, and in this episode Tempest helps 
                          us unpack it so that asexual characters can be written more effectively.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          We’re often asked how to balance character arcs with the intricacies of the plots we create. 
                          In this episode we talk about the various ways in which we do this.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          Listener questions drove this episode, and there are only two of them but they were pretty good drivers. 
                          Here they are: Is it a problem that all my dialog ends up as logic-based debates between characters?
                          What can I do to create more variety in my dialog structure?
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="8">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          Season 5 is going to be a bit broader than the previous seasons have, at least in the abstract. 
                          We’re going to focus on your questions. In this episode we tackle the topic that dominates our collection 
                          of these questions: CAREER.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Natasha Ence is a professional game master. (Yes, you read that correctly.)
                          She joins us to discuss collaborative storytelling, and how the principles of game mastering for 
                          role-players can be applied to creating a fulfilling, engaging story.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          We’ve spent all year focusing on worldbuilding, and it’s time to move on.
                          Almost. In this episode we try to cover some points we may have missed, we talk about what we’ve 
                          learned, and discuss some of our favorite recent examples of worldbuilding.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                      We’ve all heard the adage “write what you know,” and in this episode we set out to un-misinterpret it. 
                      The phrase is fraught, and perhaps the most perilous bit is that it can be used an excuse to not write. 
                      Here at Writing Excuses we’re pretty committed to approaching things in ways that let us do MORE writing, 
                      so this topic is a great place for us to leave you out of excuses.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                      In this episode we discuss how our customs and mores govern our own real-world interactions, 
                      and how our understanding of these interactions can be applied to our worldbuilding.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                      The entire year has been about learning how to worldbuild, and we’ve learned a thing or 
                      two ourselves while preparing material for you. In this episode we talk about some of those 
                      lessons, and try to answer stray questions that didn’t fit into any of previous episode buckets.
                      </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="9">
                <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>Meet George Orwell as he goes into depth about his life and inspritations</CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Jim Butcher joined us at NASFIC for a discussion about how we can keep long-running serials 
                          engaging after numerous books.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          Let’s talk about serials. Jenn Court, whose work includes lots of  writing for TV (IMDB link), 
                          joins us for the discussion. What are the elements that get us, as readers or viewers, to come back for 
                          episode after episode, and how do we, as writers, identify those elements and set about synthesizing them?
                       </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          Shannon and Dean Hale join us again, this time to discuss how to effectively and convincingly write 
                          for¹ children. Children have their own unique sets of expectations for the books they read (as do their 
                          parents), and in this episode we talk about how to meet (or subvert) those.
                          </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          Shannon and Dean Hale join us to discuss how to effectively and convincingly write about¹ 
                          children. We cover dialog tools, point-of-view elements, stakes, and character ‘quirks’ that can help 
                          signal to the reader that a character is a child.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          In this episode we’ll be talking about the things we do to stay creative, productive, healthy, and happy. 
                          For the purposes of this discussion, “mental wellness” is not about coping with mental illness, it’s about 
                          self-care.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="10">
              <Row>
                  <Col sm="12">
                    <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 1</strong> </CardTitle>
                      <CardText>
                          The title of this episode comes to us from listener questions along the lines of 
                          “what do you do when you’re ‘in the trenches’ querying agents?” Our answers, predictably, 
                          have almost nothing to do with actual trenches.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 2</strong> </CardTitle>
                      <CardText>
                          Daniel Friend, who edits SF/F, has worked in election offices, has run for office, 
                          and has participated in campaigns. In this episode we talk about the ways elections can be 
                          worked into our stories.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 3</strong> </CardTitle>
                      <CardText>
                          What can we do to be allies to members of marginalized groups? Many of us want to find ways 
                          to help others have safe, comfortable places within our communities, but worry about coming across 
                          the wrong way. In this episode, our hosts talk about how we can do this well as writers, as members of 
                          writing communities, and in society at large.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 4</strong> </CardTitle>
                      <CardText>
                          “How do you break in?” is one of those questions we always get asked in some form or another, 
                          and it’s also one for which those of us who “broke in” more than a couple of years ago are increasingly 
                          unqualified to answer. The path “in” is always changing, and it seems to be changing faster as time goes on.
                          In this episode we’ll talk about how “digital” (read: “social media + everything else internet”) 
                          applies to building a career as a creative.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 5</strong> </CardTitle>
                      <CardText>
                          We’ve talked in the past about how ideas are cheap, and that it’s execution upon those ideas 
                          which is what really matters. In this episode we’ll talk about how we evaluate things over there on the 
                          side of the equation where things are cheap and plentiful. Because while we have no shortage of ideas, they 
                          vary quite a bit in their value to us.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle> <strong>Episode 6</strong> </CardTitle>
                      <CardText>
                          “Should I go self-pub? Should I go traditional? Can I do both? How do I decide where my book fits?”
                          In this episode we’ll cover these, and many more questions as best we’re able.
                        </CardText>
                      <Button>Play Now!</Button>
                    </Card>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              </TabContent>
          </div>
        );
      }
      
//thank you to Writing Excuses Podcast for the descriptions!
export default Example;