import React from 'react'

export default function CocktailCard(props) {
  return (
    <div>
      <table>
        <tr>
          <th rowSpan={5}>ESPRESSO</th>
          <th>Ingredients</th>
          <th>Amount/ unit</th>
          <th>Vessel</th>
          <th>Method</th>
          <th>Ice</th>
          <th>Garnish</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>Vodka</td>
          <td>25ml</td>
          <td rowSpan={4}>Coupe</td>
          <td rowSpan={4}>Shake and Fine Strain</td>
          <td rowSpan={4}>None</td>
          <td rowSpan={4}>3 coffee beans</td>
          <td rowSpan={4}>Coffee Mix - 5:1 - Instand Coffee : Water ratio </td>
        </tr>
        <tr>
          <td>Kahlua</td>
          <td>25ml</td>
        </tr>
        <tr>
          <td>Coffee Mix</td>
          <td>50ml</td>
        </tr>
        <tr>
          <td>Sugar Syrup</td>
          <td>25ml</td>
        </tr>
      </table>
    </div>
  )
}
