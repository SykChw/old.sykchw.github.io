---
title: Opinion on Opinions
draft: false
date: 2024-11-25
---

>[!note]
>The following is an exceedingly opinionated write-up on how I feel opinions are formed, or at least how I tend to form opinions. Venture forth at your own peril.

Generally I try to not have specific preformed opinions that are dug-in, and as a result attempt to form an opinion based on an overarching consensus. Of course, what I just mentioned would be an entirely ideal scenario which is almost always not the case. Every person living or dead will have some internal inclinations about absolutely everything. This is the result of what I suppose would be their uniquely individual upbringing and their innate nature to an extent. These things are difficult to quantize in any legitimate sense. So I generally treat these as the regularization constant used to preserve the person's identity through their opinions. This is because people do not change their opinions on a dime based just on an overall consensus, there is some natural resistance to it based on their inherent individual bias.

This can be represented in the following manner:
$$
O_1 + O_2 + \dots + O_i + \dots + O_n + \lambda
$$ 
Where each $O_i \in \mathbb{R}$ is a measure of the positiveness, negativeness or neutrality of their opinion on a particular topic. However, this relation assumes that we allocate equal amount of importance to every opinion that we come across, which is simply not true. The weightage of someone's opinion whom you just met is going to be far less than a longtime friend, family member, etc. Thus we update the relation to reflect the same:
$$
O_1 H_1(\lambda) + O_2 H_1(\lambda) + \dots + O_i H_i(\lambda) + \dots + O_n H_n(\lambda) + \lambda
$$ 
Where each $H_i(\lambda)$ is a measure of closeness between you and the $i$-th person providing the opinion. Similarly we also tend to listen more to people when their opinions generally represent our own. In which case the closeness represented by $H_i(\lambda)$ can be a metric derived from the closeness of opinion between you and the $i$-th person. 

The way that I like to think about how this particular metric can be derived is through two factors:
$$
H_i(\lambda) = \left(\lambda_i \cdot \lambda \right)^{c_i}
$$ 
Where $\lambda_i \cdot \lambda$ is the similarly score between the $i$-th opinion and your opinion and $c \in [0, 1]$ is the scaling factor determining how closely related you and the $i$-th person is. In the best case scenario, both the similarly score and the closeness score tends to $1$. 
$$
\begin{gather*}
\lambda_i \cdot \lambda \to 1\\
c_i \to 1\\
\left(\lambda_i \cdot \lambda \right)^{c_i} \to 1\\
\left(\lambda_i \cdot \lambda \right)^{c_i} = H_i(\lambda) \to 1\\
O_i H_i(\lambda) \to O_i
\end{gather*}
$$ 
In the best case scenario, as $O_i H_i(\lambda) \to O_i$ the opinion of the $i$-th has almost an equal amount of weightage as your own starting opinion. Thus, the resulting relation can be summed up as:
$$
\begin{gather*}
O(\lambda) = \sum_{i=1}^n O_i H_i(\lambda) +\lambda = O_1 H_1(\lambda) + O_2 H_1(\lambda) + \dots + O_i H_i(\lambda) + \dots + O_n H_n(\lambda) + \lambda\\
O(\lambda) = O_1 (\lambda_1 \cdot \lambda)^{c_1} + O_2 (\lambda_2 \cdot \lambda)^{c_2} + \dots + O_i (\lambda_i \cdot \lambda)^{c_i} + \dots + O_n (\lambda_n \cdot \lambda)^{c_n} + \lambda\\
\\
\boxed{O(\lambda) = \sum_{i=1}^n O_i (\lambda_i \cdot \lambda)^{c_n} + \lambda}
\end{gather*}
$$ 
This is a very subjective mathematical framework built on many shaky assumptions none of which might be true (or even accurate). However, I feel that this does adequately represent the role of consensus in the opinion-forming process. There will of course be factors that I may not have considered, and additional constraints I might have thought of.


>[!info]
>This document serves as a potential first draft in an effort to develop a theory of opinion formation (without any literature survey, based only on personal axioms). I would be glad if this were to be of use to anyone, or even if it served as a pleasant little morsel of a read. I wish to do some background survey on some topics such as decision making, power laws, consensus making in order to perhaps refine my theory, but it will mostly remain a blind experiment in conjecture, nothing more, nothing less.

