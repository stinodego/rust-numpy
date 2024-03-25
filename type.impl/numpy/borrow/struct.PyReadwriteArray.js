(function() {var type_impls = {
"numpy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#464-497\">source</a><a href=\"#impl-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_array_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#477-480\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.as_array_mut\" class=\"fn\">as_array_mut</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/type.ArrayViewMut.html\" title=\"type ndarray::ArrayViewMut\">ArrayViewMut</a>&lt;'_, T, D&gt;</h4></section></summary><div class=\"docblock\"><p>Provides a mutable array view of the interior of the NumPy array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_slice_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#484-487\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.as_slice_mut\" class=\"fn\">as_slice_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.slice.html\">[T]</a>, <a class=\"struct\" href=\"numpy/struct.NotContiguousError.html\" title=\"struct numpy::NotContiguousError\">NotContiguousError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Provide a mutable slice view of the interior of the NumPy array if it is contiguous.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#491-496\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.get_mut\" class=\"fn\">get_mut</a>&lt;I&gt;(&amp;mut self, index: I) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut T</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"numpy/convert/trait.NpyIndex.html\" title=\"trait numpy::convert::NpyIndex\">NpyIndex</a>&lt;Dim = D&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Provide a mutable reference to an element of the NumPy array if the index is within bounds.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadwriteArray%3C'py,+N,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#500-520\">source</a><a href=\"#impl-PyReadwriteArray%3C'py,+N,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N, D&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, N, D&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_as_matrix_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#509-519\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.try_as_matrix_mut\" class=\"fn\">try_as_matrix_mut</a>&lt;R, C, RStride, CStride&gt;(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/matrix_view/type.MatrixViewMut.html\" title=\"type nalgebra::base::matrix_view::MatrixViewMut\">MatrixViewMut</a>&lt;'_, N, R, C, RStride, CStride&gt;&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    C: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    RStride: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStride: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,</div></h4></section></summary><div class=\"docblock\"><p>Try to convert this array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/matrix_view/type.MatrixViewMut.html\" title=\"type nalgebra::base::matrix_view::MatrixViewMut\"><code>nalgebra::MatrixViewMut</code></a> using the given shape and strides.</p>\n<p>See <a href=\"numpy/borrow/struct.PyReadonlyArray.html#method.try_as_matrix\" title=\"method numpy::borrow::PyReadonlyArray::try_as_matrix\"><code>PyReadonlyArray::try_as_matrix</code></a> for a discussion of the memory layout requirements.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadwriteArray%3C'py,+N,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#523-536\">source</a><a href=\"#impl-PyReadwriteArray%3C'py,+N,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, N, <a class=\"type\" href=\"numpy/type.Ix1.html\" title=\"type numpy::Ix1\">Ix1</a>&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_matrix_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#533-535\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.as_matrix_mut\" class=\"fn\">as_matrix_mut</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixViewMut.html\" title=\"type nalgebra::base::alias_view::DMatrixViewMut\">DMatrixViewMut</a>&lt;'_, N, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Convert this one-dimensional array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixViewMut.html\" title=\"type nalgebra::base::alias_view::DMatrixViewMut\"><code>nalgebra::DMatrixViewMut</code></a> using dynamic strides.</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>Panics if the array has negative strides.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadwriteArray1"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadwriteArray%3C'py,+N,+Dim%3C%5Busize;+2%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#539-552\">source</a><a href=\"#impl-PyReadwriteArray%3C'py,+N,+Dim%3C%5Busize;+2%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, N&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, N, <a class=\"type\" href=\"numpy/type.Ix2.html\" title=\"type numpy::Ix2\">Ix2</a>&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/scalar/trait.Scalar.html\" title=\"trait nalgebra::base::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_matrix_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#549-551\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.as_matrix_mut\" class=\"fn\">as_matrix_mut</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixViewMut.html\" title=\"type nalgebra::base::alias_view::DMatrixViewMut\">DMatrixViewMut</a>&lt;'_, N, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, <a class=\"struct\" href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Convert this two-dimensional array into a <a href=\"https://docs.rs/nalgebra/0.25.0/nalgebra/base/alias_view/type.DMatrixViewMut.html\" title=\"type nalgebra::base::alias_view::DMatrixViewMut\"><code>nalgebra::DMatrixViewMut</code></a> using dynamic strides.</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>Panics if the array has negative strides.</p>\n</div></details></div></details>",0,"numpy::borrow::PyReadwriteArray2"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PyReadwriteArray%3C'py,+T,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#554-592\">source</a><a href=\"#impl-PyReadwriteArray%3C'py,+T,+Dim%3C%5Busize;+1%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T&gt; <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, <a class=\"type\" href=\"numpy/type.Ix1.html\" title=\"type numpy::Ix1\">Ix1</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.resize\" class=\"method\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#577-591\">source</a><h4 class=\"code-header\">pub fn <a href=\"numpy/borrow/struct.PyReadwriteArray.html#tymethod.resize\" class=\"fn\">resize</a>&lt;ID: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/conversion/trait.IntoDimension.html\" title=\"trait ndarray::dimension::conversion::IntoDimension\">IntoDimension</a>&gt;(self, dims: ID) -&gt; PyResult&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Extends or truncates the dimensions of an array.</p>\n<p>Safe wrapper for <a href=\"numpy/array/struct.PyArray.html#method.resize\" title=\"method numpy::array::PyArray::resize\"><code>PyArray::resize</code></a>.</p>\n<h5 id=\"example\"><a href=\"#example\">Example</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>numpy::{PyArray, PyArrayMethods, PyUntypedArrayMethods};\n<span class=\"kw\">use </span>pyo3::Python;\n\nPython::with_gil(|py| {\n    <span class=\"kw\">let </span>pyarray = PyArray::arange_bound(py, <span class=\"number\">0</span>, <span class=\"number\">10</span>, <span class=\"number\">1</span>);\n    <span class=\"macro\">assert_eq!</span>(pyarray.len(), <span class=\"number\">10</span>);\n\n    <span class=\"kw\">let </span>pyarray = pyarray.readwrite();\n    <span class=\"kw\">let </span>pyarray = pyarray.resize(<span class=\"number\">100</span>).unwrap();\n    <span class=\"macro\">assert_eq!</span>(pyarray.len(), <span class=\"number\">100</span>);\n});</code></pre></div>\n</div></details></div></details>",0,"numpy::borrow::PyReadwriteArray1"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#604-618\">source</a><a href=\"#impl-Debug-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#609-617\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#444-455\">source</a><a href=\"#impl-Deref-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#451-454\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromPyObject%3C'py%3E-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#457-462\">source</a><a href=\"#impl-FromPyObject%3C'py%3E-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>&gt; FromPyObject&lt;'py&gt; for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract_bound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#458-461\">source</a><a href=\"#method.extract_bound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extract_bound</a>(obj: &amp;Bound&lt;'py, PyAny&gt;) -&gt; PyResult&lt;Self&gt;</h4></section></summary><div class='docblock'>Extracts <code>Self</code> from the bound smart pointer <code>obj</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract\" class=\"method trait-impl\"><a href=\"#method.extract\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extract</a>(ob: &amp;'py PyAny) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, PyErr&gt;</h4></section></summary><div class='docblock'>Extracts <code>Self</code> from the source GIL Ref <code>obj</code>. <a>Read more</a></div></details></div></details>","FromPyObject<'py>","numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#594-602\">source</a><a href=\"#impl-Drop-for-PyReadwriteArray%3C'py,+T,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"numpy/borrow/struct.PyReadwriteArray.html\" title=\"struct numpy::borrow::PyReadwriteArray\">PyReadwriteArray</a>&lt;'py, T, D&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/borrow/mod.rs.html#599-601\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","numpy::borrow::PyReadwriteArray0","numpy::borrow::PyReadwriteArray1","numpy::borrow::PyReadwriteArray2","numpy::borrow::PyReadwriteArray3","numpy::borrow::PyReadwriteArray4","numpy::borrow::PyReadwriteArray5","numpy::borrow::PyReadwriteArray6","numpy::borrow::PyReadwriteArrayDyn"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()