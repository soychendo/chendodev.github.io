import React from "react"
import {
  ContainerSkeleton,
  CardWrapper,
  CardImage,
  CardTechnologies,
  ChildTechnology,
  CardDescription,
  CardButtons
} from './styles'
import { database } from "@database/database";

export const skeleton: Array<number> = []
  for(let i = 1; i <= database.length; i++)
    skeleton.push(i)

export const CardSkeleton = (): JSX.Element => {

  return (
    <ContainerSkeleton>
      <CardWrapper>
        <CardImage />
        <CardTechnologies >
          <ChildTechnology />
          <ChildTechnology />
          <ChildTechnology />
        </CardTechnologies>
        <CardDescription />
        <CardButtons />
      </CardWrapper>
    </ContainerSkeleton>
  )
}
