import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function ExibirFoto(props) {
    const imagem = props.foto ?
        'https://image.tmdb.org/t/p/w500/' + props.foto :
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAhFBMVEUAAAD////c3Nzu7u5hYWHQ0NCysrKYmJjY2Ng3Nzfy8vKoqKjl5eV+fn6vr69NTU2EhIShoaHFxcWKiorS0tJ0dHSRkZEnJye+vr74+Pjh4eHDw8NXV1dAQEAMDAxGRkYWFhZ3d3cvLy9KSkpnZ2ccHBxcXFwiIiIqKio7OztTU1MRERFRHA6qAAAPlElEQVR4nO2dCXuiPBeGCchSBYrgAu4Lam3////7si8QBFssnffLc10zo4GB25CcJCcnwbKMjIyMjIwUXT/3QyN8SwWYDo3wDd2sKbi9DU3xvM6gAGA1NMXzuq8Wq0k6NMV3NHKGJviWYm8V/IMGZRe+2Z//WDm5WbZrgUkUeKPwH8ryFHwUY+s4iwNoC6MMfA4N1EVXkC1Cy3ovrdPCsrKNlYH9LBiaqk3l6jMsrVEe5GOY7fu5ndrTkxXYI29oskc6leX4cPDs6RYWljPM7zUs3fM0mMPyYr0PTdcsH1gXNyjx57kPv9n442UaHq0EHIYDe6gzWFreakS/7dxD9JazY769/5j/zXboupmPwshaj+l37+qUR/JxV1yt9eTu72+D0TXLX0zdnbUDICbfk4W/oP3BFMxgwQkOs+NweM16R93tEwAh+eoBAMinL5J2+YPWsPQcai8Qo59Ytw9I61ln63N63QLg0tPC+DwcpEY5pL3AZiZYByAYA5BfwNEG88A7w1yPAUh82Ah93fYAzIdGVbQBUeRBK831BkBQAjCNydcxegyl8wWKoUlVXcY2sC3KPM0KcCuAA3+GHwPXpsnzCQjBH2s3y2MKayEoRsscwM5rklv2fAHOnr+FJhyCZz4A1xUAh3ho0orSeOpsC0SFsvSCkmJA62AOJpYVhgfgpf5fs4QnUFqXCFnCMS3CN27JC3jMWt0+dhbIGy8wlGa0FYcmozjurFuGirQPEzYOAAvrCx3LwICADUqIjX5zcB0s0B8X/uUU+OsWH/uD2Y2KRZFPYO2MPz9dEFgOzGwHXCMwPu6hfUmzBDagf3HQBk00gBYD+9aKAtrAEvZLXBegDiIsPCmy4gMj6nQpULsOQIQ+A7B0gTOHpnENMnQUfsphobkPDKnRPofNY7oCRXSOYNYnIS7nC/jP9H0TAHsNH0AUDU1Z1x01l5s30qoHuednWZItpvHaxjWzhB3FzCuHptToiNvzYp3srcs1WsT5er3OYz8Z3ayNP8O/ZzI0o1bbopjsD5G3AlWtvPmtTFln9s9pefHDGjOTfTzthgZsVOY2cv/NMZrQxk9rmQ7LydBY3bQ8j+bHJMuyaD56Xw5NY2RkZGRkZGRkZGRkZGRk9A9qM4K6yikjIvipHNW0lc6Q9etTxngORJ459YhfB7lZNS4qPC2lSU/5tYgK23ttCBZ2REmTBj6577yBb9KQnle4kcJXkle4E3JLPKHwU24y9/Yr3HPlfhq+pnKy1nK/EFzh3pC7sQl38rTXqaSEpztK+oJzj+fH4zHKKfhVd8++ue9S3nE+TaC6KBmqMDcNsbkRD+7L4q8k7g88a4Pij2Q+zUTIQ25H+QZeNf0jcY+BlF+c79vcZdNpvUhwkwcrz6P+jNsqKtnQqzh3gGmKS5Xv+9x4MutVwUCMOyV1Upn9/SF3rSnuU5Sbtu5qwCtOSpFdY4reePpMSd/XuS/4tFct48DczoJgj9RjoK5jQ7qw35x7gg+8KvhKniirTrX/iHtEDryq4ZG4aysXvsVNDQjtn73KnCj5nfXBXaSum/K52pdFiJN6SXtElalUnGbHnlD+ydNDOZ1ERdT7VYtXYdN6uaT3UUsjTnq2f/I72MwO0p4g2Nb4nrXfQqtXDt5Yu1PSm52qfE9z4+Z9HMSvXfzA2/mMcP+4f/IyC6JK9Kto5HFv/cHXSurH0jGKrfL9fW6LWl3e/vwr3BYNo1LGl97+XehT9KvSrZT+fh+Um1myqcStqt3vMwj3jQwxf+I/GYTb2lKO7/urfpNbGpSwhnOk53vo9xn/Inc+c92Z3IOdBy7UbAYHmviTogAXIHdWTZ9hx9QaXesPxoMbGRkZGRkZGRkZGf1Ml03iTxfzplWUaKzeeaet87v29NMnSu51neaCL+Aqcl30wr0yiiM6gqIoNHPvdFBdTa7Ni/5UE3WMaNezZI0PVP35EU6tO5gdaewsRGce7Nrp39S10I/WJZ1IcnWo28INlFVJF9Av90IzKgeV7TXo7CCorENr417LiSwyoiduLXalFH5pU9u5Ze//mZfCXrDnPIeTD/h1Mx1rslaUfzWqoZVbYgw1ad8XK3ShmMogD0CpguIxqDdt5Ra/M2q4xDdFZ+MVH822qEwk+VL5UYxkOzevyUWv3HsNNrIeqkmmYTT4b2U9bjs3e26Spe2Dm9TxWktwUr5l9CRyW9m2P+SWG58T6JebXGnz+CSSexE1hrJte8hN54pxU0A+ru2euInPtSXCglicMd4lAumjI7dLM/mC9qMjWR/2xE1MR0tsH92cwGKVWArIeMg9o6UwZU9s2ht33KGYkDAM3KXaSyW2C/eBnL/N2BPri5tkyOPuqS2xVXcmaOGmM6FkMwY0c9Ev98ONNGjzTJb1jyoZ3sYtWW3c4+mLm1jV0aNTiCVgOyWFaoVo5T4K7lOP3FnDfYXo9BTrkB5ZSe3IbfHhCP7lfXGTQvBoAomUJGFCiGVIOnNTC0iHSn1x0/LXHLrKwmgqYr+0nZtNmUf9cntSZkiKdsrxuuaduUnjQ1l746ZN2kxNHfEmtAGb9Wg6cJM24twzN8tQBbzkF5/qmLFGnbnRb2f9zf64mYUtRAQb+SkBvWWDAom73k9QuBfC4PfI/c5InMno/rY9stErykXSfalsTEUb70/B7diyvCq3VfBBSI/cYoCpCo0PyFCz6jTJ+XFp8KU+CZVb9H/65OYBbIpQiSRLYWrGhtblewP3rMYt1Cu3datvkoQbFtLG1EMWU/7LhuWG91cDFXO8hS0tQPWzaVdr2VxOxuyDjrvXQPByzfwmqykdXeaolq10EaL8SLmya0L10kXHNQHfKTqh7/iOw2aezLft5xkZGQ2qxPf9jPpLTpFf0u7tfrGAzfzyDet+s8iHN2t3h3//hR3EVrzl2ZH+P+764YbeWbK+uc+6X3RQtzq1XPX1ssEE7VT6ae3GoJhmHvayRaBYZGFqZYHrgNANjpAbReC5kLtw3V8LHHzIvUGD/hw27bh1fkMDrrXocOf44441qlvcFr5w7UhX2Wh9xhz2/QA44IQEkk3AmA1ItdxFiyPpF2SjbvYMTK6sM3SA3cMdHGo4ZKzAucdQIeQex15YX7b067LBbA37QoeSd+JQ1u5QjXSQbeHcSAWtl38gvhT7Bp1P1OUmCUc6Is4K7CWslRPnugB/4FUrNojOuKc1Iw//MkajH7Si1Mfd1Bp3iAZ3mo73L8tm66Zghq+i0i8QbQnycu5gYs49KqEI94U5QQeUzX2eHytedokzFBd4vNk6K9+AcFtBbUT66/Jz0R/f+F5GWsJLNImJ2yLJ0b87uqTO+shR9pf5C3dVMDIyMnq17ADKVgyZi5IqgUvLRRoWePMedSXyFP//iuxfeFUmbULk4AHsaVbCIK4zyT9VxNILmnKg0y/0tOid5AiJKvdXbR9w8XiG5pZ98RXukQaMuyoH55bGLCq3zpUJxw2XR9zr2m1exy28vQq3cJYHk+nU48FedCw8n2L5xNWc+uTrL+wiLzKJd+pk7lu1HG3XNEF9nwB5Kon1a5Ke7oEmydxkLxplZLChM1tKpibqT3+9JG6WgxJ3qSuvdPclZfpqGO5AyUGJm8SiVCcMaDiNXCqG4Z6QIQ2dkRLcdDuumh9tWvs5w3B7dAaQOEIEN4l/1Fhj8nskj+ZQ3LRxwX4pwU0aSk04FjHbUldlKG4614dLiuAm1lrzv2rz3YNx03l7/snlB3Vh/mRmUHrt23DctD3fdOK+8/9GNRw3jblzZO6CptT0ScyQSBiQm0aGT2vlW+ONyv5O+eYLCE5jzp1WzQYTMTRSPN+Q3HR2ZyW4SbbW591pSMqXSBmUm7bfgHPfeF1VRcy33NkalFsOkif9E1Ieqm+mo4ETcjTfsNxSvD/hpk9ANYVXTeLA3JsKNxuHjaUpBbb+R5llGJhbjBdZZ5xFqaQUM2IjNdXBMjQ3D4Rm3NICi5nL30pbC0oanHte4caLe+qqvq1ucG4WlyvAlvUosvrWVsNzf9Uz1K9QO/UtKIfhVkY0iab88sV3ULbudXWkZX3hroNVXTebzVVd8LBBqq6A/fRzOwxnXqKfiz/h6wwf0GFkZGRkZGRkZGRk9P+k2/2tqsp67v3CcwM3n1bdgPupD1WJkUYR+T6OL7nhw768tfoBpxD/my8ruX5YTyrWeBHknzURQ8ciV0ZnR5xYmbu2+QXoJKHs1v+QRtnVe4b+l/WMJtULKNzVo+lBHCOulMorKYIqt7yKlKxOjrXc4Ml3Nz3i3o/rx8RovSO3FCvUwg3Ci9VZD7i1CxpFrnTlFo7ZNm5QdB/x06hcWfRGV3G5lW2LrGdekK7cwm1S47Zv2A6UMXPWVV3pbdyaAx/stmvian3jNXj0JDef8K5xiykW5vOqOhaf56a+1VBYxR3dtKh4lpvhPeDm/lGdt+sZ7qPu99N16PGT3MxYPuJGa2qQui72aeImUyLV0BK6JuqrMzedWTm0czMz0PH9ZA3cNACi1oyxHW66cieO9Ngec9Pp0I6rZhq4c+kWsghs2Jk7O0vFtoW7tu1OO/dkEguh3CTZpHGukupz6cq9kLfKaOGm8+bdVldp2p0xu6yujpAHsenOTX9p3oE7Fo/mO9wOq9y6orbg1+7KTevbqJ2bXLtblKGe+8zzqKqEX7srt5hVbuMmMS7dZlP05aR5ZRmZ8Tg+w03DDOIX5HeUSDqyYBPdDggee+j0+bf0v3HfhL5jdX9p4fZ4nnTlriWTyqQJiSF1HjX+xMRPdYcr3PQphLsWbodf+9vcbsMj27OSxMAqdVe8IlLmpm046fY1ctOtVzphN3GTYlw3hGLvDXprdVuRjfgtMrcyxdnIrdmI8Wlu2q+vTvzSaW4yGNY8k1QkKdzyjo9N3EdyuGOHsImb2hnVXNCWOJBvVEiVgMSxgUOdm++62shNS0nXkUNj/5v2h+V6x4IKzsopYhxG+9CkyKvckt9Az80GhdVXPz7NzSBDNtt+Z+tGeOGh9q2gLQXbJequ4+aRKlruJR2S6DZ3eZJbtEjjfJFlMV+6IF06YGm2O+PH6ROqcvN1JxJ3mGRIEx630v3lqc3cDZuayY3RQeOoYBEHVW6LrXx4MJ7vaLtbuLXbg6n2elkD50+jxs1Qm7mdJwIPHnFbm9oLIGstUaoeF4azzn1s4da8SK5Z8SNu2P7I5IXuytdAnJBKz5lwK74z0rDo/YPjyRPOKqhyAlUfj0lcMY4sLcK8qUU4Jd5stXLj6CanLmN0ZSX054RSJuQy04nQdPGi/Y8uy+cyw8jIyMjIyMjIyMjIyMjIyMjI6D+s/wGp9dNI3EfafQAAAABJRU5ErkJggg=='

    if(props.link){
        return (
            <Link href={props.link + props.id}>
                <Card.Img variant="top" src={imagem} />
            </Link>
        )
    } else {
        return (
            <Card.Img variant="top" src={imagem} />
        )
    }
}

const Fotos = (props) => {
    return (
        <>
            {
                props.titulo &&
                <h2 className='mt-3'>Título: {props.titulo}</h2>
            }
            <Row>
                {props.lista.map(item => (
                    <Col className='mb-3' md={2}>
                        <ExibirFoto
                            link={props.link}
                            id={item.id}
                            foto={item[props.foto]}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Fotos