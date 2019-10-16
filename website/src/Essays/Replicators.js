import React from 'react';

import { EssayWrapper, 
    EssayTitle, P, Tag, TagBox
} from '../Components/Styling';

const Replicators = (props) => {
    return (
        <EssayWrapper>
            <EssayTitle>Replicators</EssayTitle>
            <TagBox>
                <p>Source:</p>
                <a href="https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606/ref=sr_1_1?keywords=the+selfish+gene&qid=1571264148&sr=8-1" target="_blank" style={{textDecoration: "none", color: "dodgerblue"}}>The Selfish Gene by Richard Dawkins</a>
            </TagBox>
            <TagBox>
                <p>Categories:</p>
                <Tag to="/essays/mentalmodels">Mental Models</Tag>
                <Tag to="/essays/evolution">Evolution</Tag>
            </TagBox>

            <P>Darwin’s 'survival of the fittest' is really a special case of a more general law of 'survival of the stable'.  The universe is populated by stable things.  A stable thing is a collection of atoms that is permanent enough or common enough to deserve a name.  The things that we see around us, and which we think of as needing explanation—rocks, galaxies, ocean waves, rain drops—are all, to a greater or lesser extent, stable patterns of atoms.  The point that is relevant here is that, before the coming of life on earth, some rudimentary evolution of molecules could have occurred by ordinary processes of physics and chemistry.  There is no need to think of design or purpose or directedness.  If a group of atoms in the presence of energy falls into a stable pattern, it will tend to stay that way.  The earliest form of natural selection was simply a selection of stable forms and a rejection of unstable ones. There is no mystery about this.  It had to happen by definition.</P>
            <P>From this, of course, it does not follow that you can explain the existence of entities as complex as human beings by exactly the same principles on their own.  It is no good taking the right number of atoms and shaking them together with some external energy until they happen to fall into the right pattern, and out drops Adam!  This is where Darwin’s theory, in its most general form, comes to the rescue.</P>
            <P>We do not know what chemical raw materials were abundant on earth before the coming of life, but among the plausible possibilities are water, carbon dioxide, methane, and ammonia: all simple compounds known to be present on at least some of the other planets in our solar system.  Chemists have tried to imitate the chemical conditions of the young earth.  They have put these simple substances in a flask and supplied a source of energy such as ultraviolet light or electric sparks—an artificial simulation of primordial lightning.  After a few weeks of this, something interesting is usually found inside the flask: a weak brown soup containing a large number of molecules more complex than the ones originally put in.  In particular, amino acids have been found—the building blocks of proteins, one of the two great classes of biological molecules.  More recently, laboratory simulations of the chemical conditions of earth before the coming of life have yielded organic substances called purines and pyrimidines.  These are building blocks of the genetic molecule—DNA itself.</P>
            <P>Processes analogous to these must have given rise to the ‘primeval soup’ which biologists and chemists believe constituted the seas some three to four thousand million years ago.  The organic substances became locally concentrated (perhaps in drying scum round the shores), and under the further influence of energy such as ultraviolet light from the sun, they combined into larger molecules.  At some point, a particularly remarkable molecule was formed by accident.  We will call it the replicator.  It had the extraordinary property of being able to create copies of itself.  Suddenly, a new kind of ‘stability’ came into the world.  Previously it is probable that no particular kind of complex molecule was very abundant in the soup, because each was dependent on building blocks happening to fall by luck into a particular stable configuration.  As soon as the replicator was born it must have spread its copies rapidly throughout the seas.</P>
            <P>So we seem to arrive at a large population of identical replicas.  But now we must mention an important property of any copying process: it is not perfect.  Mistakes will happen.  Erratic copying in biological replicators can in a real sense give rise to improvement, and it was essential for the progressive evolution of life that some errors were made.  As mis-copyings were made and propagated, the primeval soup became filled by a population not of identical replicas, but of several varieties of replicating molecules, all ‘descended’ from the same ancestor.  Would some varieties have been more numerous than others? Almost certainly yes.  Some varieties would have been inherently more stable than others.  Certain molecules once formed would be less likely than others to break up again.  These types would become relatively  numerous in the soup, not only as a direct logical consequence of their ‘longevity,’ but also because they would have a long time available for making copies of themselves.  Replicators of high longevity would therefore tend to become more numerous and, other things being equal, there would have been an ‘evolutionary trend’ towards greater longevity in the population of molecules.</P>

        </EssayWrapper>
    )
}

export default Replicators;