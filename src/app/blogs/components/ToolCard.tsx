export default function ToolCard({
name,
bestFor,
difficulty,
price
}: any) {

return (

<div className="border rounded-xl p-6 my-6 bg-white shadow-sm">

<h3 className="text-xl font-semibold mb-3">
{name}
</h3>

<ul className="text-sm space-y-1">

<li><strong>Best For:</strong> {bestFor}</li>
<li><strong>Difficulty:</strong> {difficulty}</li>
<li><strong>Price:</strong> {price}</li>

</ul>

</div>

)

}