---
title: QuadraSHAP Featured by Nebius Science
excerpt: Our work on fast and stable Shapley-value computation was highlighted by Nebius Science.
thumbnail: /assets/images/photo/shapley_nebius.jpg
author: Pavel Sinitcyn
---

![QuadraSHAP Nebius highlight]({{ '/assets/images/photo/shapley_nebius.jpg' | relative_url }})
{: style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 2rem;" }

[Nebius Science](https://nebius.science/stories/utrecht-shapley) featured our recent work on QuadraSHAP - a fast and numerically stable algorithm for computing Shapley values.

Shapley values are a popular framework for explaining machine learning models, but their factorial computational cost makes them prohibitively slow in practice. Majid Mohammadi worked out the key theoretical insight - the painful sum over feature coalitions can be rewritten as a one-dimensional integral, solved efficiently by Gauss-Legendre quadrature. Grigory Reznikov turned this into fast, stable code for tree ensembles and kernels.

The result: 2-5x faster than the standard SHAP library on trees, and on kernels the gap widens further - 25x faster at 500 features, 95x at 1'000, and past 2'000 features the previous best simply times out while QuadraSHAP finishes in seconds.

The preprint is available on [arXiv](https://arxiv.org/abs/2605.05870).
