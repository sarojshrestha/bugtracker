import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client'
import { Heading, Flex, Card, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props{
    params: {id: string}
}


const IssueDetailsPage = async ({ params }: Props) => {
   // if(typeof params.id !=='number') notFound();


const id = parseInt(params.id);
if(isNaN(id))
    notFound();

   const issue = await prisma.issue.findUnique({
        where: { id }
    });

    if(!issue)
        notFound();
return(
    <div>
        <Heading>{issue.title}</Heading>
        <Flex className='space-x-3' my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
        <p>{issue.description}</p>
        </Card>
    </div>
);
}

export default IssueDetailsPage